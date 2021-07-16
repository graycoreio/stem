import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffPrefixSuffixModule } from '@daffodil/design';

import { DaffTreeItemContentDirective } from './tree-item-content/tree-item-content.directive';
import { DaffTreeItemTitleDirective } from './tree-item-title/tree-item-title.directive';
import { DaffTreeItemComponent } from './tree-item/tree-item.component';
import { DaffTreeComponent } from './tree/tree.component';

@NgModule({
  imports: [
    CommonModule,

    FontAwesomeModule,
    DaffPrefixSuffixModule,
  ],
  declarations: [
    DaffTreeComponent,
    DaffTreeItemComponent,
    DaffTreeItemTitleDirective,
    DaffTreeItemContentDirective,
  ],
  exports: [
    DaffTreeComponent,
    DaffTreeItemComponent,
    DaffTreeItemTitleDirective,
    DaffTreeItemContentDirective,
  ],
})
export class DaffTreeModule { }
