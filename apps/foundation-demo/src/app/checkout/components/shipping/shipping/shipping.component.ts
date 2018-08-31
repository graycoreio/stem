import { Component, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { DaffodilAddress } from '@daffodil/core';

import { SetShowShippingForm, ToggleShowShippingForm } from '../../../actions/shipping.actions';
import * as fromFoundationCheckout from '../../../reducers';

@Component({
  selector: 'shipping',
  templateUrl: './shipping.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ShippingComponent {

  @Input() isShippingInfoValid: boolean;
  @Input() shippingInfo: DaffodilAddress;
  @Input() selectedShippingOptionId: string;
  @Input() showPaymentView: boolean;
  @Output() updateShippingInfo: EventEmitter<any> = new EventEmitter();
  @Output() selectShippingOption: EventEmitter<any> = new EventEmitter();

  showShippingForm$: Observable<boolean>;

  constructor(
    private store: Store<fromFoundationCheckout.State>
  ) { }

  ngOnInit() {    
    this.store.dispatch(
      new SetShowShippingForm(!this.isShippingInfoValid)
    );

    this.showShippingForm$ = this.store.pipe(
      select(fromFoundationCheckout.selectShowShippingForm)
    );
  }

  toggleShippingView() {
    this.store.dispatch(
      new ToggleShowShippingForm()
    );
  }

  onUpdateShippingInfo(shippingInfo) {
    this.updateShippingInfo.emit(shippingInfo.address);
    this.selectShippingOption.emit(shippingInfo.shippingOption.id);

    this.toggleShippingView();
  }
}
