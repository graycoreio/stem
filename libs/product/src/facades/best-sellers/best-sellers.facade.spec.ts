import { TestBed } from '@angular/core/testing';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffBestSellersFacade } from './best-sellers.facade';
import { DaffBestSellersLoad, DaffBestSellersLoadSuccess } from '../../actions/best-sellers.actions';
import { DaffProductReducersState } from '../../reducers/product-reducers-state.interface';
import { daffProductReducers } from '../../reducers/product-reducers';

describe('DaffBestSellersFacade', () => {
  let store: Store<DaffProductReducersState>;
  let facade: DaffBestSellersFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        StoreModule.forRoot({
          product: combineReducers(daffProductReducers),
        })
      ],
      providers: [
        DaffBestSellersFacade,
      ]
    })

    store = TestBed.inject(Store);
    facade = TestBed.inject(DaffBestSellersFacade);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should be able to dispatch an action to the store', () => {
    spyOn(store, 'dispatch');
    const action = {type: 'SOME_TYPE'};

    facade.dispatch(action);
    expect(store.dispatch).toHaveBeenCalledWith(action);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  describe('loading$', () => {
    it('should be false if the bestSellers is not loading', () => {
      const expected = cold('a', { a: false });
      expect(facade.loading$).toBeObservable(expected);
    });

    it('should be true if the bestSellers is loading', () => {
      const expected = cold('a', { a: true });
      store.dispatch(new DaffBestSellersLoad());
      expect(facade.loading$).toBeObservable(expected);
    });
  });

  describe('bestSellers$', () => {
    it('should be initially an empty array', () => {
      const initial = cold('a', { a: [] });
      expect(facade.bestSellers$).toBeObservable(initial);
    });

    it('should be an observable of the list of the best sellers that are added to state', () => {
			const stubProduct = new DaffProductFactory().create();
      const expected = cold('a', { a: [stubProduct]});
      store.dispatch(new DaffBestSellersLoadSuccess([stubProduct]));
      expect(facade.bestSellers$).toBeObservable(expected);
    })
  })
});
