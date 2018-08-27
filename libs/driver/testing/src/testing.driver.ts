import { Injectable } from '@angular/core';

import { DaffDriverInterface, DaffDriver } from '@daffodil/driver';
import { DaffTestingProductService } from './product/services/product.service';
import { DaffTestingCartService } from './cart/services/cart.service';
import { DaffDriverTestingModule } from '.';

@Injectable({
    providedIn: 'root'
})
export class DaffTestingDriver implements DaffDriverInterface {
    constructor(
        public productService: DaffTestingProductService,
        public cartService: DaffTestingCartService,
    ){}
}