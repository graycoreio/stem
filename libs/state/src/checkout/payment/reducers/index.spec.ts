import { TestBed, async } from "@angular/core/testing";

import { StoreModule, combineReducers, Store, select } from "@ngrx/store";

import * as fromPayment from './index';
import { PaymentInfo, BillingFactory } from '@daffodil/core';
import { UpdatePaymentInfo } from "../actions/payment.actions";

describe('selectPaymentState', () => {

  let store: Store<fromPayment.PaymentState>;
  let billingFactory: BillingFactory = new BillingFactory();
  let stubPaymentInfo: PaymentInfo;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          payment: combineReducers(fromPayment.reducers),
        })
      ]
    });

    stubPaymentInfo = billingFactory.create();
    store = TestBed.get(Store);
    store.dispatch(new UpdatePaymentInfo(stubPaymentInfo));
  }));

  describe('selectPaymentState', () => {
    
    it('selects payment state', () => {
      let expectedPaymentState = {
        paymentInfo: stubPaymentInfo
      }

      store.pipe(select(fromPayment.paymentStateSelector)).subscribe((paymentState) => {
        expect(paymentState).toEqual(expectedPaymentState);
      });
    });
  });

  describe('selectPaymentInfoState', () => {
    
    it('selects paymentInfo state', () => {
      store.pipe(select(fromPayment.selectPaymentInfoState)).subscribe((paymentInfo) => {
        expect(paymentInfo).toEqual(stubPaymentInfo);
      });
    });
  });
});
