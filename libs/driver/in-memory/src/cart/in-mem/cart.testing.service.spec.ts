import { TestBed } from '@angular/core/testing';

import { DaffInMemoryCartTestingService } from './cart.testing.service';

import { Cart } from '@daffodil/core';
import { DaffCoreTestingModule, DaffCartFactory } from '@daffodil/core/testing';

import { STATUS } from 'angular-in-memory-web-api';

describe('Driver | Cart | In Memory | CartTestingService', () => {
  let cartTestingService: DaffInMemoryCartTestingService;
  let stubCart: Cart;
  let daffCartFactory: jasmine.SpyObj<DaffCartFactory>;

  
  beforeEach(() => {
    const spy = jasmine.createSpyObj('DaffCartFactory', ['create']);
    stubCart = new DaffCartFactory().create();

    TestBed.configureTestingModule({
      providers: [
        DaffInMemoryCartTestingService,
        { provide: DaffCartFactory, useValue: spy}
      ]
    });
    
    daffCartFactory = TestBed.get(DaffCartFactory);    
    daffCartFactory.create.and.returnValue(stubCart);

    cartTestingService = TestBed.get(DaffInMemoryCartTestingService);
  });

  it('should be created', () => {
    expect(cartTestingService).toBeTruthy();
  });

  describe('createDb', () => {
    let result;

    beforeEach(() => {
      result = cartTestingService.createDb();
    });
    
    it('should return a cart', () => {
      result = cartTestingService.createDb();
      expect(result.cart).toEqual(stubCart);
    });
  });

  describe('post', () => {
    let reqInfoStub;
    let result;

    beforeEach(() => {
      reqInfoStub = {
        req: {
          body: 'body'
        },
        utils: {
          createResponse$: func => {
            return func();
          }
        }
      };
      result = cartTestingService.post(reqInfoStub);
    });

    it('should return the returned value from createResponse$', () => {
      expect(result).toEqual({
        body: stubCart,
        status: STATUS.OK
      });
    });

    describe('when reqInfo.id is addToCart', () => {
      let productIdValue;

      beforeEach(() => {
        reqInfoStub = {
          id: 'addToCart',
          req: {
            body: {
              productId: 'replaceme',
              qty: 4
            }
          },
          utils: {
            createResponse$: func => {
              return func();
            }
          }
        };
      });

      describe('and product is unique', () => {
        it('should add an item to the cart', () => {
          reqInfoStub.req.body.productId = 'addToCartTest';
          result = cartTestingService.post(reqInfoStub);

          expect(result.body.items.length).toEqual(1);
        });

        it('should set qty of the cartItem to the given qty value', () => {
          reqInfoStub.req.body.productId = 'qtyTest';
          reqInfoStub.req.body.qty = 2;

          result = cartTestingService.post(reqInfoStub);

          expect(result.body.items[0].qty).toEqual(2);
        });

        it('should set productId of the cartItem to the given productId value', () => {
          productIdValue = 'productIdTest';
          reqInfoStub.req.body.productId = productIdValue;

          result = cartTestingService.post(reqInfoStub);

          expect(result.body.items[0].product_id).toEqual(productIdValue);
        });
      });

      describe('and product is not unique', () => {
        it('should add given qty to existing product', () => {
          reqInfoStub.req.body.productId = 'qtyTest';
          reqInfoStub.req.body.qty = 2;

          result = cartTestingService.post(reqInfoStub);

          expect(result.body.items[0].qty).toEqual(2);

          result = cartTestingService.post(reqInfoStub);

          expect(result.body.items[0].qty).toEqual(4);
        });
      });
    });
  });
});
