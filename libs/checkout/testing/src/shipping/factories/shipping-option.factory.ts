import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { ShippingOption } from '@daffodil/checkout';
import { DaffModelFactory } from '@daffodil/core/testing';


export class MockShippingOption implements ShippingOption {
  id = faker.random.uuid();
  text = faker.company.companyName() + ' ' + faker.commerce.productAdjective() + ' Shipping';
}

@Injectable({
  providedIn: 'root',
})
export class DaffShippingOptionFactory extends DaffModelFactory<ShippingOption>{
  constructor(){
    super(MockShippingOption);
  }
}
