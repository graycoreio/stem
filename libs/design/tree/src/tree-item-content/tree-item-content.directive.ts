import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffTreeItemContent]',
})
export class DaffTreeItemContentDirective {

  /**
   * @docs-private
   */
  @HostBinding('class.daff-tree-item__content') class = true;
}
