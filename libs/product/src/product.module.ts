import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffProductGridContainer } from './containers/product-grid/product-grid.component';
import { StateProductStateModule } from './product-state.module';
import { DaffProductContainer } from './containers/product/product.component';
import { DaffBestSellersContainer } from './containers/best-sellers/best-sellers.component';

@NgModule({
  imports: [
    CommonModule,

    /**
     * Ngrx/store
     */
    StateProductStateModule,
  ],
  declarations: [
    DaffProductGridContainer,
    DaffProductContainer,
    DaffBestSellersContainer
  ],
  exports: [
    DaffProductGridContainer,
    DaffProductContainer,
    DaffBestSellersContainer
  ]
})
export class StateProductModule { }
