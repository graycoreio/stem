import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';

import { PaymentInfo } from '@daffodil/core';
import * as fromPayment from '../reducers/index';
import { UpdatePaymentInfo } from '../actions/payment.actions';

@Component({
  selector: '[payment-container]',
  template: '<ng-content></ng-content>',
  exportAs: 'PaymentContainer'
})
export class PaymentContainer implements OnInit {
  
  paymentInfo$: Observable<PaymentInfo>;

  constructor(
    private store: Store<fromPayment.State>
  ) { }

  ngOnInit() {
    this.paymentInfo$ = this.store.pipe(select(fromPayment.selectPaymentInfoState));
  }

  updatePaymentInfo(info: PaymentInfo) {
    this.store.dispatch(new UpdatePaymentInfo(info));
  }
}
