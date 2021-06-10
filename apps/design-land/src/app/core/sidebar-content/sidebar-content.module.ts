import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffTreeModule } from '@daffodil/design';

import { SidebarContentComponent } from './sidebar-content.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SidebarContentComponent],
  imports: [
    CommonModule,
		RouterModule,
		DaffTreeModule,
  ],
  exports: [
    SidebarContentComponent,
  ],
})
export class DesignLandSidebarContentModule { }
