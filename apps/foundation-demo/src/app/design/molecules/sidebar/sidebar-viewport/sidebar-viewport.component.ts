import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';

import { DaffSidebarMode } from '../helper/sidebar-mode';
import { daffSidebarAnimations } from '../../backdrop/animation/sidebar-animation';
import { getAnimationState } from '../../backdrop/animation/sidebar-animation-state';

@Component({
  selector: 'daff-sidebar-viewport',
  templateUrl: './sidebar-viewport.component.html',
  styleUrls: ['./sidebar-viewport.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    daffSidebarAnimations.transformSidebar,
    daffSidebarAnimations.transformContent,
    daffSidebarAnimations.fadeBackdrop
  ]
})
export class DaffSidebarViewportComponent implements OnInit{

  ngOnInit() {
    this._animationState = getAnimationState(this.opened, this.animationsEnabled);
  }

  _animationState: string;

  get animationsEnabled() : boolean {
    return ( this.mode == "over" || this.mode == "push" ) ? true : false;
  }

  /**
   * Property for the "opened" state of the sidebar
   */
  @Input()
  get opened(): boolean { return this._opened; }
  set opened(value: boolean) { 
    this._opened = value;
    this._animationState = getAnimationState(value, this.animationsEnabled);
  }

  /**
   * Internal tracking variable for the state of sidebar viewport.
   */
  private _opened: boolean = false;

  /**
   * Event fired when the backdrop is clicked
   * This is often used to close the sidebar
   */
  @Output() onBackdropClicked: EventEmitter<void> = new EventEmitter<void>();

  _onBackdropClicked() : void {
    this.onBackdropClicked.emit();
  }

  get hasBackdrop() : boolean {
    return (this.mode == "over" || this.mode == "push");
  }

  /**
   * Input state for whether or not the backdrop is 
   * "visible" to the human eye
   */
  @Input() backdropIsVisible: boolean = true;

  /**
   * The mode to put the sidebar in
   */
  @Input() mode: DaffSidebarMode = "side";
}