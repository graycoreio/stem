import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffLinkSetModule } from '@daffodil/design';

import { DesignLandLinkSetRoutingModule } from './link-set-routing.module';
import { LinkSetComponent } from './link-set.component';


@NgModule({
  declarations: [
    LinkSetComponent,
  ],
  imports: [
    CommonModule,
    DesignLandLinkSetRoutingModule,

    DaffLinkSetModule,
  ],
})
export class LinkSetModule { }
