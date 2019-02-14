import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DaffioFullFooterComponent } from './full-footer/full-footer.component';
import { DaffioSimpleFooterComponent } from './simple-footer/simple-footer.component';
import { DaffioSubFooterComponent } from './sub-footer/sub-footer.component';

import { DaffioNewsletterModule } from '../../newsletter/newsletter.module';
import { DaffioLogoModule } from '../logo/logo.module';

import { 
  DaffCalloutModule,
  DaffListModule, 
  DaffButtonSetModule, 
  DaffButtonModule, 
  DaffContainerModule,
  DaffInputModule,
  DaffLinkModule
} from '@daffodil/design';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    
    DaffCalloutModule,
    DaffListModule,
    DaffButtonModule,
    DaffButtonSetModule,
    DaffContainerModule,
    DaffInputModule,
    DaffLinkModule,
    DaffioLogoModule,
    DaffioNewsletterModule
  ],
  declarations: [
    DaffioSimpleFooterComponent,
    DaffioSubFooterComponent
  ],
  exports: [
    DaffioSimpleFooterComponent,
    DaffioSubFooterComponent
  ]
})
export class DaffioFooterModule { }