import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffTreeItemTitle]',
})
export class DaffTreeItemTitleDirective {

  /**
   * @docs-private
   */
  @HostBinding('class.daff-tree-item__title') class = true;
}
