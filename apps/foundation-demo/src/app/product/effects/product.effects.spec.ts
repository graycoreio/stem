import { TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs/Observable';

import { hot, cold } from 'jasmine-marbles';

import { ProductEffects } from './product.effects';
import { AddToCart } from '@daffodil/core';
import { RedirectToCartSuccess } from '../actions/product.actions';
import { provideMockActions } from '@ngrx/effects/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductEffects', () => {
  let actions$: Observable<any>;
  let effects: ProductEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        ProductEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(ProductEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when AddToCartAction is triggered', () => {

    let expected;
    const addToCartAction = new AddToCart({productId: 'id', qty: 1});
  
    beforeEach(() => {
      const redirectToCartSuccessAction = new RedirectToCartSuccess('');
      actions$ = hot('--a', { a: addToCartAction });
      expected = cold('--b', { b: redirectToCartSuccessAction });
    });
    
    it('should dispatch a RedirectToCartSuccess action', () => {
      expect(effects.addToCart$).toBeObservable(expected);
    });
  });
});
