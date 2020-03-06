import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffCartShippingMethodsDriver } from '../interfaces/cart-shipping-methods-service.interface';
import { DaffMagentoCartShippingMethodsService } from './cart-shipping-methods.service';

import { DaffCartItemDriver } from '../interfaces/cart-item-service.interface';
import { DaffMagentoCartItemService } from './cart-item.service';

import { DaffCartBillingAddressDriver } from '../interfaces/cart-billing-address-service.interface';
import { DaffMagentoCartBillingAddressService } from './cart-billing-address.service';

import { DaffCartShippingAddressDriver } from '../interfaces/cart-shipping-address-service.interface';
import { DaffMagentoCartShippingAddressService } from './cart-shipping-address.service';

import { DaffCartPaymentMethodsDriver } from '../interfaces/cart-payment-methods-service.interface';
import { DaffMagentoCartPaymentMethodsService } from './cart-payment-methods.service';

import { DaffCartPaymentDriver } from '../interfaces/cart-payment-service.interface';
import { DaffMagentoCartPaymentService } from './cart-payment.service';

import { DaffCartShippingInformationDriver } from '../interfaces/cart-shipping-information-service.interface';
import { DaffMagentoCartShippingInformationService } from './cart-shipping-information.service';

import { DaffMagentoCartShippingRateTransformer } from './transforms/outputs/cart-shipping-rate.service';
import { DaffMagentoCartPaymentTransformer } from './transforms/outputs/cart-payment.service';
import { DaffMagentoBillingAddressTransformer } from './transforms/outputs/billing-address.service';
import { DaffMagentoCartAddressTransformer } from './transforms/outputs/cart-address.service';
import { DaffMagentoCartItemTransformer } from './transforms/outputs/cart-item.service';
import { DaffMagentoCartShippingInformationTransformer } from './transforms/outputs/cart-shipping-information.service';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import { DaffMagentoShippingAddressTransformer } from './transforms/outputs/shipping-address.service';


import { DaffMagentoCartAddressInputTransformer } from './transforms/inputs/cart-address.service';
import { DaffMagentoShippingAddressInputTransformer } from './transforms/inputs/shipping-address.service';
import { DaffMagentoBillingAddressInputTransformer } from './transforms/inputs/billing-address.service';
import { DaffMagentoCartItemInputTransformer } from './transforms/inputs/cart-item.service';
import { DaffMagentoCartItemUpdateInputTransformer } from './transforms/inputs/cart-item-update.service';
import { DaffMagentoPaymentMethodInputTransformer } from './transforms/inputs/payment-method.service';
import { DaffMagentoShippingMethodInputTransformer } from './transforms/inputs/shipping-method.service';

@NgModule({
  imports: [
    CommonModule,
  ]
})
export class DaffCartMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffCartMagentoDriverModule> {
    return {
      ngModule: DaffCartMagentoDriverModule,
      providers: [
        {
          provide: DaffCartItemDriver,
          useExisting: DaffMagentoCartItemService
        },
        {
          provide: DaffCartBillingAddressDriver,
          useExisting: DaffMagentoCartBillingAddressService
        },
        {
          provide: DaffCartShippingAddressDriver,
          useExisting: DaffMagentoCartShippingAddressService
        },
        {
          provide: DaffCartShippingMethodsDriver,
          useExisting: DaffMagentoCartShippingMethodsService
        },
        {
          provide: DaffCartShippingInformationDriver,
          useExisting: DaffMagentoCartShippingInformationService
        },
        {
          provide: DaffCartPaymentDriver,
          useExisting: DaffMagentoCartPaymentService
        },
        {
          provide: DaffCartPaymentMethodsDriver,
          useExisting: DaffMagentoCartPaymentMethodsService
        },

        // output transformers
        DaffMagentoBillingAddressTransformer,
        DaffMagentoCartAddressTransformer,
        DaffMagentoCartItemTransformer,
        DaffMagentoCartPaymentTransformer,
        DaffMagentoCartShippingInformationTransformer,
        DaffMagentoCartShippingRateTransformer,
        DaffMagentoCartPaymentTransformer,
        DaffMagentoCartTransformer,
        DaffMagentoShippingAddressTransformer,

        // input transformers
        DaffMagentoCartAddressInputTransformer,
        DaffMagentoShippingAddressInputTransformer,
        DaffMagentoBillingAddressInputTransformer,
        DaffMagentoCartItemInputTransformer,
        DaffMagentoCartItemUpdateInputTransformer,
        DaffMagentoPaymentMethodInputTransformer,
        DaffMagentoShippingMethodInputTransformer
      ]
    };
  }
}
