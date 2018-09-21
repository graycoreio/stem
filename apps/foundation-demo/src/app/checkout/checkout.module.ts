import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StateCheckoutModule, StateCartModule } from '@daffodil/state';

import { CheckoutViewComponent } from './pages/checkout-view/checkout-view.component';
import { ShippingFormComponent } from './components/shipping/shipping-form/shipping-form.component';
import { ShippingSummaryComponent } from './components/shipping/shipping-summary/shipping-summary.component';
import { ShippingComponent } from './components/shipping/shipping/shipping.component';
import { DesignModule } from '../design/design.module';
import { FoundationCheckoutStateModule } from './checkout-state.module';
import { PaymentFormComponent } from './components/payment/payment-form/payment-form.component';
import { PaymentComponent } from './components/payment/payment/payment.component';
import { PaymentSummaryComponent } from './components/payment/payment-summary/payment-summary.component';
import { CartModule } from '../cart/cart.module';
import { AddressSummaryComponent } from './components/payment/address-summary/address-summary.component';
import { BillingSummaryComponent } from './components/payment/billing-summary/billing-summary.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { ShippingOptionsModule } from './components/shipping/shipping-options/shipping-options.module';
import { AddressFormModule } from './components/forms/address-form/address-form.module';
import { MiscModule } from '../misc/misc.module';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { PrintOrderSummaryComponent } from './components/print-order-summary/print-order-summary.component';
import { LoadingIconModule } from '../core/loading-icon/loading-icon.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StateCheckoutModule,
    DesignModule,
    FoundationCheckoutStateModule,
    CartModule,
    StateCartModule,
    ShippingOptionsModule,
    AddressFormModule,
    MiscModule,
    LoadingIconModule
  ],
  declarations: [
    CheckoutViewComponent,
    ShippingFormComponent,
    ShippingSummaryComponent,
    ShippingComponent,
    PaymentFormComponent,
    PaymentComponent,
    PaymentSummaryComponent,
    AddressSummaryComponent,
    BillingSummaryComponent,
    PlaceOrderComponent,
    ThankYouComponent,
    PrintOrderSummaryComponent
  ],
  exports: [
    CheckoutViewComponent,
    ShippingFormComponent,
    ShippingSummaryComponent,
    ShippingComponent,
    PaymentFormComponent,
    PaymentComponent,
    PaymentSummaryComponent,
    AddressSummaryComponent,
    BillingSummaryComponent,
    PlaceOrderComponent,
    ThankYouComponent,
    PrintOrderSummaryComponent
  ]
})
export class CheckoutModule { }
