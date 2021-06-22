import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  DaffListModule,
  DaffLinkSetModule,
} from '@daffodil/design';

import { DaffioGuideNavComponent } from './guide-nav.component';
import { DaffTreeModule } from '@daffodil/design/tree';


@NgModule({
  declarations: [
    DaffioGuideNavComponent,
  ],
  exports: [
    DaffioGuideNavComponent,
  ],
  imports: [
    CommonModule,
    DaffLinkSetModule,
    DaffListModule,
    RouterModule,
    DaffTreeModule,
  ],
})
export class DaffioGuideNavModule { }
