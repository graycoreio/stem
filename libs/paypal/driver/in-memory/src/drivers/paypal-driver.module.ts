import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DaffPaypalDriver } from '@daffodil/paypal/driver';

import { DaffInMemoryPaypalService } from './paypal.service';

@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffPaypalInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffPaypalInMemoryDriverModule> {
    return {
      ngModule: DaffPaypalInMemoryDriverModule,
      providers: [
        {
          provide: DaffPaypalDriver,
          useExisting: DaffInMemoryPaypalService,
        },
      ],
    };
  }
}
