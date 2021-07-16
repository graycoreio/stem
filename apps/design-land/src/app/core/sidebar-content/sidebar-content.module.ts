import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffTreeModule } from '@daffodil/design/tree';

import { SidebarContentComponent } from './sidebar-content.component';

@NgModule({
  declarations: [
    SidebarContentComponent,
  ],
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
