import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffTreeModule } from '@daffodil/design/tree';

import { NestedTreeComponent } from './nested-tree.component';


@NgModule({
  declarations: [
    NestedTreeComponent,
  ],
  exports: [
    NestedTreeComponent,
  ],
  imports: [
    DaffTreeModule,
    RouterModule,
  ],
})
export class NestedTreeModule { }
