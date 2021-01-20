/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DaffCartStorageService, DAFF_CART_ERROR_MATCHER } from '@daffodil/cart';
import { DaffCartShippingMethodsDriver } from '@daffodil/cart/driver';
import { DaffCartShippingMethodsActionTypes, DaffCartShippingMethodsLoadSuccess, DaffCartShippingMethodsLoadFailure, } from '../actions/public_api';
/**
 * @template T
 */
export class DaffCartShippingMethodsEffects {
    /**
     * @param {?} actions$
     * @param {?} errorMatcher
     * @param {?} driver
     * @param {?} storage
     */
    constructor(actions$, errorMatcher, driver, storage) {
        this.actions$ = actions$;
        this.errorMatcher = errorMatcher;
        this.driver = driver;
        this.storage = storage;
        this.list$ = this.actions$.pipe(ofType(DaffCartShippingMethodsActionTypes.CartShippingMethodsLoadAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.driver.list(this.storage.getCartId()).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => new DaffCartShippingMethodsLoadSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffCartShippingMethodsLoadFailure(this.errorMatcher(error)))))))));
    }
}
DaffCartShippingMethodsEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DaffCartShippingMethodsEffects.ctorParameters = () => [
    { type: Actions },
    { type: Function, decorators: [{ type: Inject, args: [DAFF_CART_ERROR_MATCHER,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DaffCartShippingMethodsDriver,] }] },
    { type: DaffCartStorageService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], DaffCartShippingMethodsEffects.prototype, "list$", void 0);
if (false) {
    /** @type {?} */
    DaffCartShippingMethodsEffects.prototype.list$;
    /**
     * @type {?}
     * @private
     */
    DaffCartShippingMethodsEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffCartShippingMethodsEffects.prototype.errorMatcher;
    /**
     * @type {?}
     * @private
     */
    DaffCartShippingMethodsEffects.prototype.driver;
    /**
     * @type {?}
     * @private
     */
    DaffCartShippingMethodsEffects.prototype.storage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zaGlwcGluZy1tZXRob2RzLmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9zdGF0ZS8iLCJzb3VyY2VzIjpbImVmZmVjdHMvY2FydC1zaGlwcGluZy1tZXRob2RzLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RCxPQUFPLEVBQXdCLHNCQUFzQixFQUFFLHVCQUF1QixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkcsT0FBTyxFQUFFLDZCQUE2QixFQUEyQyxNQUFNLHVCQUF1QixDQUFDO0FBRS9HLE9BQU8sRUFDTCxrQ0FBa0MsRUFFbEMsa0NBQWtDLEVBQ2xDLGtDQUFrQyxHQUNuQyxNQUFNLHVCQUF1QixDQUFDOzs7O0FBRy9CLE1BQU0sT0FBTyw4QkFBOEI7Ozs7Ozs7SUFFekMsWUFDVSxRQUFpQixFQUNnQixZQUFzQixFQUNoQixNQUFrRCxFQUN6RixPQUErQjtRQUgvQixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2dCLGlCQUFZLEdBQVosWUFBWSxDQUFVO1FBQ2hCLFdBQU0sR0FBTixNQUFNLENBQTRDO1FBQ3pGLFlBQU8sR0FBUCxPQUFPLENBQXdCO1FBSXpDLFVBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDeEIsTUFBTSxDQUFDLGtDQUFrQyxDQUFDLDZCQUE2QixDQUFDLEVBQ3hFLFNBQVM7Ozs7UUFBQyxDQUFDLE1BQW1DLEVBQUUsRUFBRSxDQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUM3QyxHQUFHOzs7O1FBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksa0NBQWtDLENBQUMsSUFBSSxDQUFDLEVBQUMsRUFDaEUsVUFBVTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksa0NBQWtDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FDMUYsRUFDRixDQUNGLENBQUE7SUFYSSxDQUFDOzs7WUFSUCxVQUFVOzs7O1lBWkYsT0FBTztZQWlCMkMsUUFBUSx1QkFBOUQsTUFBTSxTQUFDLHVCQUF1Qjs0Q0FDOUIsTUFBTSxTQUFDLDZCQUE2QjtZQWhCVixzQkFBc0I7O0FBcUJuRDtJQURDLE1BQU0sRUFBRTs7NkRBU1I7OztJQVRELCtDQVNDOzs7OztJQWZDLGtEQUF5Qjs7Ozs7SUFDekIsc0RBQStEOzs7OztJQUMvRCxnREFBaUc7Ozs7O0lBQ2pHLGlEQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc3dpdGNoTWFwLCBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcblxuaW1wb3J0IHsgRGFmZkNhcnRTaGlwcGluZ1JhdGUsIERhZmZDYXJ0U3RvcmFnZVNlcnZpY2UsIERBRkZfQ0FSVF9FUlJPUl9NQVRDSEVSIH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuaW1wb3J0IHsgRGFmZkNhcnRTaGlwcGluZ01ldGhvZHNEcml2ZXIsIERhZmZDYXJ0U2hpcHBpbmdNZXRob2RzU2VydmljZUludGVyZmFjZSB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L2RyaXZlcic7XG5cbmltcG9ydCB7XG4gIERhZmZDYXJ0U2hpcHBpbmdNZXRob2RzQWN0aW9uVHlwZXMsXG4gIERhZmZDYXJ0U2hpcHBpbmdNZXRob2RzTG9hZCxcbiAgRGFmZkNhcnRTaGlwcGluZ01ldGhvZHNMb2FkU3VjY2VzcyxcbiAgRGFmZkNhcnRTaGlwcGluZ01ldGhvZHNMb2FkRmFpbHVyZSxcbn0gZnJvbSAnLi4vYWN0aW9ucy9wdWJsaWNfYXBpJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0U2hpcHBpbmdNZXRob2RzRWZmZWN0czxUIGV4dGVuZHMgRGFmZkNhcnRTaGlwcGluZ1JhdGU+IHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIEBJbmplY3QoREFGRl9DQVJUX0VSUk9SX01BVENIRVIpIHByaXZhdGUgZXJyb3JNYXRjaGVyOiBGdW5jdGlvbixcbiAgICBASW5qZWN0KERhZmZDYXJ0U2hpcHBpbmdNZXRob2RzRHJpdmVyKSBwcml2YXRlIGRyaXZlcjogRGFmZkNhcnRTaGlwcGluZ01ldGhvZHNTZXJ2aWNlSW50ZXJmYWNlPFQ+LFxuICAgIHByaXZhdGUgc3RvcmFnZTogRGFmZkNhcnRTdG9yYWdlU2VydmljZVxuICAgICkge31cblxuICBARWZmZWN0KClcbiAgbGlzdCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERhZmZDYXJ0U2hpcHBpbmdNZXRob2RzQWN0aW9uVHlwZXMuQ2FydFNoaXBwaW5nTWV0aG9kc0xvYWRBY3Rpb24pLFxuICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBEYWZmQ2FydFNoaXBwaW5nTWV0aG9kc0xvYWQpID0+XG4gICAgICB0aGlzLmRyaXZlci5saXN0KHRoaXMuc3RvcmFnZS5nZXRDYXJ0SWQoKSkucGlwZShcbiAgICAgICAgbWFwKChyZXNwOiBUW10pID0+IG5ldyBEYWZmQ2FydFNoaXBwaW5nTWV0aG9kc0xvYWRTdWNjZXNzKHJlc3ApKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgRGFmZkNhcnRTaGlwcGluZ01ldGhvZHNMb2FkRmFpbHVyZSh0aGlzLmVycm9yTWF0Y2hlcihlcnJvcikpKSlcbiAgICAgIClcbiAgICApXG4gIClcbn1cbiJdfQ==