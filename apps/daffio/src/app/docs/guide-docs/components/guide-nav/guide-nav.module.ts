import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  DaffListModule,
  DaffLinkSetModule,
} from '@daffodil/design';
import { DaffTreeModule } from '@daffodil/design/tree';

import { DaffioGuideNavComponent } from './guide-nav.component';

@NgModule({
  declarations: [
    DaffioGuideNavComponent,
  ],
  exports: [
    DaffioGuideNavComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DaffLinkSetModule,
    DaffListModule,
    DaffTreeModule,
  ],
})
export class DaffioGuideNavModule { }
