/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import gql from 'graphql-tag';
import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core/graphql';
import { cartItemFragment } from './fragments/cart-item';
import { cartCouponFragment } from './fragments/public_api';
import { cartTotalsFragment } from './fragments/cart-totals';
/** @type {?} */
export var removeAllCoupons = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
function (extraCartFragments) {
    if (extraCartFragments === void 0) { extraCartFragments = []; }
    return gql(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  mutation RemoveAllCoupons($cartId: String!) {\n    removeCouponFromCart(\n      input: {\n        cart_id: $cartId\n      }\n    ) {\n      cart {\n        id\n        items {\n          ...cartItem\n        }\n        applied_coupons {\n          ...cartCoupon\n\t\t\t\t}\n\t\t\t\t...cartTotals\n        ", "\n      }\n    }\n  }\n  ", "\n\t", "\n\t", "\n  ", "\n"], ["\n  mutation RemoveAllCoupons($cartId: String!) {\n    removeCouponFromCart(\n      input: {\n        cart_id: $cartId\n      }\n    ) {\n      cart {\n        id\n        items {\n          ...cartItem\n        }\n        applied_coupons {\n          ...cartCoupon\n\t\t\t\t}\n\t\t\t\t...cartTotals\n        ", "\n      }\n    }\n  }\n  ", "\n\t", "\n\t", "\n  ", "\n"])), daffBuildFragmentNameSpread.apply(void 0, tslib_1.__spread(extraCartFragments)), cartItemFragment, cartCouponFragment, cartTotalsFragment, daffBuildFragmentDefinition.apply(void 0, tslib_1.__spread(extraCartFragments)));
});
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLWFsbC1jb3Vwb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL21hZ2VudG8vIiwic291cmNlcyI6WyJxdWVyaWVzL3JlbW92ZS1hbGwtY291cG9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sR0FBRyxNQUFNLGFBQWEsQ0FBQztBQUU5QixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVsRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFFN0QsTUFBTSxLQUFPLGdCQUFnQjs7OztBQUFHLFVBQUMsa0JBQXVDO0lBQXZDLG1DQUFBLEVBQUEsdUJBQXVDO0lBQUssT0FBQSxHQUFHLDZiQUFBLHVUQWdCdEUsRUFBa0QsMkJBSXhELEVBQWdCLE1BQ2pCLEVBQWtCLE1BQ2xCLEVBQWtCLE1BQ2pCLEVBQWtELElBQ3JELEtBUlMsMkJBQTJCLGdDQUFJLGtCQUFrQixJQUl2RCxnQkFBZ0IsRUFDakIsa0JBQWtCLEVBQ2xCLGtCQUFrQixFQUNqQiwyQkFBMkIsZ0NBQUksa0JBQWtCO0FBdkJ3QixDQXdCNUUsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvY3VtZW50Tm9kZSB9IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5cbmltcG9ydCB7IGRhZmZCdWlsZEZyYWdtZW50TmFtZVNwcmVhZCwgZGFmZkJ1aWxkRnJhZ21lbnREZWZpbml0aW9uIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvZ3JhcGhxbCc7XG5cbmltcG9ydCB7IGNhcnRJdGVtRnJhZ21lbnQgfSBmcm9tICcuL2ZyYWdtZW50cy9jYXJ0LWl0ZW0nO1xuaW1wb3J0IHsgY2FydENvdXBvbkZyYWdtZW50IH0gZnJvbSAnLi9mcmFnbWVudHMvcHVibGljX2FwaSc7XG5pbXBvcnQgeyBjYXJ0VG90YWxzRnJhZ21lbnQgfSBmcm9tICcuL2ZyYWdtZW50cy9jYXJ0LXRvdGFscyc7XG5cbmV4cG9ydCBjb25zdCByZW1vdmVBbGxDb3Vwb25zID0gKGV4dHJhQ2FydEZyYWdtZW50czogRG9jdW1lbnROb2RlW10gPSBbXSkgPT4gZ3FsYFxuICBtdXRhdGlvbiBSZW1vdmVBbGxDb3Vwb25zKCRjYXJ0SWQ6IFN0cmluZyEpIHtcbiAgICByZW1vdmVDb3Vwb25Gcm9tQ2FydChcbiAgICAgIGlucHV0OiB7XG4gICAgICAgIGNhcnRfaWQ6ICRjYXJ0SWRcbiAgICAgIH1cbiAgICApIHtcbiAgICAgIGNhcnQge1xuICAgICAgICBpZFxuICAgICAgICBpdGVtcyB7XG4gICAgICAgICAgLi4uY2FydEl0ZW1cbiAgICAgICAgfVxuICAgICAgICBhcHBsaWVkX2NvdXBvbnMge1xuICAgICAgICAgIC4uLmNhcnRDb3Vwb25cblx0XHRcdFx0fVxuXHRcdFx0XHQuLi5jYXJ0VG90YWxzXG4gICAgICAgICR7ZGFmZkJ1aWxkRnJhZ21lbnROYW1lU3ByZWFkKC4uLmV4dHJhQ2FydEZyYWdtZW50cyl9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICR7Y2FydEl0ZW1GcmFnbWVudH1cblx0JHtjYXJ0Q291cG9uRnJhZ21lbnR9XG5cdCR7Y2FydFRvdGFsc0ZyYWdtZW50fVxuICAke2RhZmZCdWlsZEZyYWdtZW50RGVmaW5pdGlvbiguLi5leHRyYUNhcnRGcmFnbWVudHMpfVxuYDtcbiJdfQ==