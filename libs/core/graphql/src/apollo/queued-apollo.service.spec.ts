import { TestBed } from '@angular/core/testing';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { interval } from 'rxjs';
import { delay, switchMapTo, take } from 'rxjs/operators';
import { TestScheduler } from 'rxjs/testing';

import { DaffQueuedApollo } from './queued-apollo.service'

describe('Core | GraphQL | DaffQueuedApollo', () => {
  let service: DaffQueuedApollo;
  let apollo: jasmine.SpyObj<Apollo>;
  let testScheduler: TestScheduler;

  const req0 = gql`
    mutation TestRequest0 {
      mutate0(arg: "test") {
        field
      }
    }
  `;
  const req1 = gql`
    mutation TestRequest1 {
      mutate1(arg: "test") {
        field
      }
    }
  `;
  const data0 = {
    data: {
      mutate0: {
        field: 'test'
      }
    }
  };
  const data1 = {
    data: {
      mutate1: {
        field: 'test'
      }
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Apollo,
          useValue: jasmine.createSpyObj('Apollo', ['mutate'])
        }
      ]
    });

    testScheduler = new TestScheduler((a, b) => {
      expect(a).toEqual(b)
    });
    service = TestBed.get(DaffQueuedApollo);
    apollo = TestBed.get(Apollo);
  });

  describe('mutate | queueing mutate requests', () => {
    let ob0;
    let ob1;

    describe('canceling multiple queued mutate requests', () => {
      it('should not cancel other operations', () => {
        testScheduler.run(({cold, expectObservable}) => {
          apollo.mutate.withArgs(jasmine.objectContaining({
            mutation: req0
          })).and.returnValue(cold('--a', {a: data0}))
          apollo.mutate.withArgs(jasmine.objectContaining({
            mutation: req1
          })).and.returnValue(cold('--a', {a: data1}))

          ob0 = interval(500).pipe(
            take(2),
            switchMapTo(service.mutate({
              mutation: req0
            })),
            delay(750)
          );
          ob1 = interval(600).pipe(
            take(1),
            switchMapTo(service.mutate({
              mutation: req1
            })),
            delay(500)
          );

          expectObservable(ob0).toBe('1252ms a 499ms (a|)', {a: data0});
          expectObservable(ob1).toBe('1102ms (a|)', {a: data1});
        })
      })
    })

    describe('when multiple requests are made', () => {
      it('should make the second request after the first one completes', () => {
        testScheduler.run(({cold, expectObservable}) => {
          apollo.mutate.withArgs(jasmine.objectContaining({
            mutation: req0
          })).and.returnValue(cold('--a', {a: data0}))
          apollo.mutate.withArgs(jasmine.objectContaining({
            mutation: req1
          })).and.returnValue(cold('--a', {a: data1}))

          ob0 = service.mutate({
            mutation: req0
          });
          ob1 = service.mutate({
            mutation: req1
          });

          expectObservable(ob0).toBe('--(a|)', {a: data0});
          expectObservable(ob1).toBe('----(a|)', {a: data1});
        })
      });
    });
  });
});
