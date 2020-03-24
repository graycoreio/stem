import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffCartItem } from '@daffodil/cart';
import { DaffProductImageFactory } from '@daffodil/product/testing';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockCartItem implements DaffCartItem {
  item_id = faker.random.number(1000);
  product_id = faker.random.number(1000);
	parent_item_id = faker.random.number(1000);
	image = new DaffProductImageFactory().create();
  sku = 'sku';
  name = 'Product Name';
  qty = faker.random.number({min:1, max:100});
  price = faker.random.number(1500);
  row_total = this.qty * this.price
  total_discount = faker.random.number({min: 0, max: this.price - 1});
}

@Injectable({
  providedIn: 'root'
})
export class DaffCartItemFactory extends DaffModelFactory<DaffCartItem>{
  constructor(){
    super(MockCartItem);
  }
}
