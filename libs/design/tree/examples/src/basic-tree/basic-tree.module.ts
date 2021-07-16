import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffTreeModule } from '@daffodil/design/tree';

import { BasicTreeComponent } from './basic-tree.component';


@NgModule({
  declarations: [
    BasicTreeComponent,
  ],
  exports: [
    BasicTreeComponent,
  ],
  imports: [
    DaffTreeModule,
    RouterModule,
  ],
})
export class BasicTreeModule { }
