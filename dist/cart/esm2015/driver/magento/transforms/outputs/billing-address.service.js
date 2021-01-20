/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DaffMagentoCartAddressTransformer } from './cart-address.service';
import * as i0 from "@angular/core";
import * as i1 from "./cart-address.service";
/**
 * Transforms magento addresses into an object usable by daffodil.
 */
export class DaffMagentoBillingAddressTransformer {
    /**
     * @param {?} addressTransformer
     */
    constructor(addressTransformer) {
        this.addressTransformer = addressTransformer;
    }
    /**
     * Transforms the magento MagentoCart from the magento cart query into a DaffCartAddress.
     * @param {?} address the address from a magento cart query.
     * @return {?}
     */
    transform(address) {
        return address ? Object.assign({}, this.addressTransformer.transform(address), { address_type: 'billing' }) : null;
    }
}
DaffMagentoBillingAddressTransformer.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffMagentoBillingAddressTransformer.ctorParameters = () => [
    { type: DaffMagentoCartAddressTransformer }
];
/** @nocollapse */ DaffMagentoBillingAddressTransformer.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoBillingAddressTransformer_Factory() { return new DaffMagentoBillingAddressTransformer(i0.ɵɵinject(i1.DaffMagentoCartAddressTransformer)); }, token: DaffMagentoBillingAddressTransformer, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffMagentoBillingAddressTransformer.prototype.addressTransformer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlsbGluZy1hZGRyZXNzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvbWFnZW50by8iLCJzb3VyY2VzIjpbInRyYW5zZm9ybXMvb3V0cHV0cy9iaWxsaW5nLWFkZHJlc3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7O0FBUzNFLE1BQU0sT0FBTyxvQ0FBb0M7Ozs7SUFDL0MsWUFDUyxrQkFBcUQ7UUFBckQsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQztJQUMzRCxDQUFDOzs7Ozs7SUFNSixTQUFTLENBQUMsT0FBMkI7UUFDbkMsT0FBTyxPQUFPLENBQUMsQ0FBQyxtQkFDWCxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUM3QyxZQUFZLEVBQUUsU0FBUyxJQUN2QixDQUFDLENBQUMsSUFBSSxDQUFBO0lBQ1YsQ0FBQzs7O1lBakJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVJRLGlDQUFpQzs7Ozs7SUFXdEMsa0VBQTREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydEFkZHJlc3MgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5cbmltcG9ydCB7IERhZmZNYWdlbnRvQ2FydEFkZHJlc3NUcmFuc2Zvcm1lciB9IGZyb20gJy4vY2FydC1hZGRyZXNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWFnZW50b0NhcnRBZGRyZXNzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Jlc3BvbnNlcy9jYXJ0LWFkZHJlc3MnO1xuXG4vKipcbiAqIFRyYW5zZm9ybXMgbWFnZW50byBhZGRyZXNzZXMgaW50byBhbiBvYmplY3QgdXNhYmxlIGJ5IGRhZmZvZGlsLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmTWFnZW50b0JpbGxpbmdBZGRyZXNzVHJhbnNmb3JtZXIge1xuICBjb25zdHJ1Y3RvciAoXG4gICAgcHVibGljIGFkZHJlc3NUcmFuc2Zvcm1lcjogRGFmZk1hZ2VudG9DYXJ0QWRkcmVzc1RyYW5zZm9ybWVyXG4gICkge31cblxuICAvKipcbiAgICogVHJhbnNmb3JtcyB0aGUgbWFnZW50byBNYWdlbnRvQ2FydCBmcm9tIHRoZSBtYWdlbnRvIGNhcnQgcXVlcnkgaW50byBhIERhZmZDYXJ0QWRkcmVzcy5cbiAgICogQHBhcmFtIGFkZHJlc3MgdGhlIGFkZHJlc3MgZnJvbSBhIG1hZ2VudG8gY2FydCBxdWVyeS5cbiAgICovXG4gIHRyYW5zZm9ybShhZGRyZXNzOiBNYWdlbnRvQ2FydEFkZHJlc3MpOiBEYWZmQ2FydEFkZHJlc3Mge1xuICAgIHJldHVybiBhZGRyZXNzID8ge1xuICAgICAgLi4udGhpcy5hZGRyZXNzVHJhbnNmb3JtZXIudHJhbnNmb3JtKGFkZHJlc3MpLFxuICAgICAgYWRkcmVzc190eXBlOiAnYmlsbGluZycsXG4gICAgfSA6IG51bGxcbiAgfVxufVxuIl19