import {
  Component,
  Input,
  OnInit,
  HostBinding,
  SkipSelf,
  Optional,
  ContentChildren,
  QueryList,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  AfterContentChecked,
} from '@angular/core';
import {
  faChevronUp,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';

import { daffTreeAnimations } from '../animation/tree-animation';
import { getAnimationState } from '../animation/tree-animation-state';
import { DaffTreeComponent } from '../tree/tree.component';

@Component({
  selector: 'daff-tree-item, a[daff-tree-item]',
  templateUrl: './tree-item.component.html',
  styleUrls: ['./tree-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    daffTreeAnimations.openTree,
  ],
})
export class DaffTreeItemComponent implements OnInit, AfterContentChecked {
	/**
	 * @docs-private
	 */
	faChevronUp = faChevronUp;
	/**
	 * @docs-private
	 */
	faChevronDown = faChevronDown;

	/**
	 * @docs-private
	 */
	@HostBinding('class') get classes() {
	  return [
	    'daff-tree-item',
	    'daff-tree-item--level-' + this._level,
	  ];
	}

	/**
	 * @docs-private
	 */
	@HostBinding('class.daff-tree-item--active') get activeClass() {
	  return this.active;
	}

	constructor(
		private tree: DaffTreeComponent,
		private cd: ChangeDetectorRef,
		@SkipSelf() @Optional() private treeItemParent: DaffTreeItemComponent,
	) { }

	@Input() initiallyOpen = false;
	@Input() active = false;

	@ContentChildren(DaffTreeItemComponent, { descendants: true })
	_treeItemChild: QueryList<DaffTreeItemComponent>;

	@ContentChildren(DaffTreeItemComponent)
	_directChildren: QueryList<DaffTreeItemComponent>;

	get hasChildren(): boolean {
	  return this._treeItemChild.length > 0;
	}

	/**
	 * @docs-private
	 */
	openTree() {
	  if (!this.hasChildren) {
	    return;
	  }

	  this._open = true;
	  this._animationState = getAnimationState(this._open);
	}

	/**
	 * @docs-private
	 */
	_interacted = false;

	ngAfterContentChecked() {
	  const activeChildren = this._treeItemChild.filter((item) => item.active);
	  if (activeChildren.length > 0 && this._interacted === false) {
	    this.openTree();
	    this.cd.markForCheck();
	  }
	}

	/**
	 * @docs-private
	 */
	_open = false;
	
	/**
	 * @docs-private
	 */
	_animationState: string;

	/**
	 * @docs-private
	 */
	_level = 0;

	/**
	 * @docs-private
	 */
	ngOnInit() {
	  if (this.treeItemParent && this.tree === this.treeItemParent.tree) {
	    this._level = this.treeItemParent._level + 1;
	  }
	  this._open = this.initiallyOpen ? this.initiallyOpen : this._open;
	}

	toggleOpen() {
	  if (!this.hasChildren) {
	    return;
	  }

	  this._open = !this._open;
	  this._interacted = true;
	  this._animationState = getAnimationState(this._open);
	}
}
