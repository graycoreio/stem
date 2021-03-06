import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DaffCartStateModule } from '@daffodil/cart/state';

import { DaffOrderEffects } from './effects/order.effects';
import {
  DAFF_ORDER_STORE_FEATURE_KEY,
  daffOrderReducers,
} from './reducers/public_api';

@NgModule({
  imports: [
    DaffCartStateModule,
    EffectsModule.forFeature([
      DaffOrderEffects,
    ]),
    StoreModule.forFeature(DAFF_ORDER_STORE_FEATURE_KEY, daffOrderReducers),
  ],
})
export class DaffOrderStateModule {}
