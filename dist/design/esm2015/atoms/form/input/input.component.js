/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Optional, Self, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DaffFormFieldControl } from '../form-field/form-field-control';
/**
 * DaffInputComponent provides the same functionality as a native `<input>` and contains custom styling and functionality.
 */
export class DaffInputComponent {
    /**
     * @param {?} ngControl
     * @param {?} _elementRef
     */
    constructor(ngControl, _elementRef) {
        this.ngControl = ngControl;
        this._elementRef = _elementRef;
        this.focused = false;
    }
    /**
     * \@docs-private
     * @return {?}
     */
    focus() {
        this.focused = true;
    }
    /**
     * \@docs-private
     * @return {?}
     */
    blur() {
        this.focused = false;
    }
    /**
     * @return {?}
     */
    onFocus() {
        this._elementRef.nativeElement.focus();
    }
}
DaffInputComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line: component-selector
                selector: 'input[daff-input]',
                template: '<ng-content></ng-content>',
                providers: [
                    { provide: DaffFormFieldControl, useExisting: DaffInputComponent }
                ],
                styles: [":host{border:none;border-radius:4px;box-shadow:none;font-size:1rem;margin:0;padding:15px 15px 0;height:54px;width:100%;box-sizing:border-box}:host:focus{border:none;box-shadow:none;outline:0}"]
            }] }
];
/** @nocollapse */
DaffInputComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: ElementRef }
];
DaffInputComponent.propDecorators = {
    formSubmitted: [{ type: Input }],
    focus: [{ type: HostListener, args: ['focus',] }],
    blur: [{ type: HostListener, args: ['blur',] }]
};
if (false) {
    /**
     * Has the form been submitted.
     * @type {?}
     */
    DaffInputComponent.prototype.formSubmitted;
    /** @type {?} */
    DaffInputComponent.prototype.focused;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffInputComponent.prototype.ngControl;
    /**
     * @type {?}
     * @private
     */
    DaffInputComponent.prototype._elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2Rlc2lnbi8iLCJzb3VyY2VzIjpbImF0b21zL2Zvcm0vaW5wdXQvaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0YsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOzs7O0FBY3hFLE1BQU0sT0FBTyxrQkFBa0I7Ozs7O0lBdUI3QixZQUkyQixTQUFvQixFQUN2QyxXQUF5QztRQUR0QixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3ZDLGdCQUFXLEdBQVgsV0FBVyxDQUE4QjtRQXJCakQsWUFBTyxHQUFHLEtBQUssQ0FBQztJQXNCZCxDQUFDOzs7OztJQWpCb0IsS0FBSztRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDOzs7OztJQUtxQixJQUFJO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFVRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekMsQ0FBQzs7O1lBMUNGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFLDJCQUEyQjtnQkFFckMsU0FBUyxFQUFFO29CQUNULEVBQUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFdBQVcsRUFBRSxrQkFBa0IsRUFBQztpQkFDakU7O2FBQ0Y7Ozs7WUFmUSxTQUFTLHVCQTJDZixRQUFRLFlBQUksSUFBSTtZQTVDd0IsVUFBVTs7OzRCQXNCbkQsS0FBSztvQkFPSixZQUFZLFNBQUMsT0FBTzttQkFPcEIsWUFBWSxTQUFDLE1BQU07Ozs7Ozs7SUFkckIsMkNBQWdDOztJQUUvQixxQ0FBZ0I7Ozs7O0lBb0JoQix1Q0FBK0M7Ozs7O0lBQy9DLHlDQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9wdGlvbmFsLCBTZWxmLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRGFmZkZvcm1GaWVsZENvbnRyb2wgfSBmcm9tICcuLi9mb3JtLWZpZWxkL2Zvcm0tZmllbGQtY29udHJvbCc7XG5cbi8qKlxuICogRGFmZklucHV0Q29tcG9uZW50IHByb3ZpZGVzIHRoZSBzYW1lIGZ1bmN0aW9uYWxpdHkgYXMgYSBuYXRpdmUgYDxpbnB1dD5gIGFuZCBjb250YWlucyBjdXN0b20gc3R5bGluZyBhbmQgZnVuY3Rpb25hbGl0eS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnaW5wdXRbZGFmZi1pbnB1dF0nLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICB7cHJvdmlkZTogRGFmZkZvcm1GaWVsZENvbnRyb2wsIHVzZUV4aXN0aW5nOiBEYWZmSW5wdXRDb21wb25lbnR9XG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIERhZmZJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIERhZmZGb3JtRmllbGRDb250cm9sIHtcblxuXHQvKipcblx0ICogSGFzIHRoZSBmb3JtIGJlZW4gc3VibWl0dGVkLlxuXHQgKi9cblx0QElucHV0KCkgZm9ybVN1Ym1pdHRlZDogYm9vbGVhbjtcblxuICBmb2N1c2VkID0gZmFsc2U7XG5cdFxuXHQvKipcblx0ICogQGRvY3MtcHJpdmF0ZVxuXHQgKi9cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKSBmb2N1cygpIHtcbiAgICB0aGlzLmZvY3VzZWQgPSB0cnVlO1xuICB9XG5cblx0LyoqXG5cdCAqIEBkb2NzLXByaXZhdGVcblx0ICovXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInKSBibHVyKCkge1xuICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG5cdFx0LyoqXG5cdFx0ICogQGRvY3MtcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdEBPcHRpb25hbCgpIEBTZWxmKCkgcHVibGljIG5nQ29udHJvbDogTmdDb250cm9sLCBcblx0XHRwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+XG5cdCkge31cblxuICBvbkZvY3VzKCkge1xuICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG59Il19