/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core/graphql';
import { availablePaymentMethodFragment } from './fragments/public_api';
/** @type {?} */
export const listPaymentMethods = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
(extraCartFragments = []) => gql `
  query ListPaymentMethods($cartId: String!) {
    cart(cart_id: $cartId) {
      available_payment_methods {
        ...availablePaymentMethod
      }
      ${daffBuildFragmentNameSpread(...extraCartFragments)}
    }
  }
  ${availablePaymentMethodFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1wYXltZW50LW1ldGhvZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvbWFnZW50by8iLCJzb3VyY2VzIjpbInF1ZXJpZXMvbGlzdC1wYXltZW50LW1ldGhvZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sR0FBRyxNQUFNLGFBQWEsQ0FBQztBQUU5QixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVsRyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFFeEUsTUFBTSxPQUFPLGtCQUFrQjs7OztBQUFHLENBQUMscUJBQXFDLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFBOzs7Ozs7UUFNMUUsMkJBQTJCLENBQUMsR0FBRyxrQkFBa0IsQ0FBQzs7O0lBR3RELDhCQUE4QjtJQUM5QiwyQkFBMkIsQ0FBQyxHQUFHLGtCQUFrQixDQUFDO0NBQ3JELENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb2N1bWVudE5vZGUgfSBmcm9tICdncmFwaHFsJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuXG5pbXBvcnQgeyBkYWZmQnVpbGRGcmFnbWVudE5hbWVTcHJlYWQsIGRhZmZCdWlsZEZyYWdtZW50RGVmaW5pdGlvbiB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL2dyYXBocWwnO1xuXG5pbXBvcnQgeyBhdmFpbGFibGVQYXltZW50TWV0aG9kRnJhZ21lbnQgfSBmcm9tICcuL2ZyYWdtZW50cy9wdWJsaWNfYXBpJztcblxuZXhwb3J0IGNvbnN0IGxpc3RQYXltZW50TWV0aG9kcyA9IChleHRyYUNhcnRGcmFnbWVudHM6IERvY3VtZW50Tm9kZVtdID0gW10pID0+IGdxbGBcbiAgcXVlcnkgTGlzdFBheW1lbnRNZXRob2RzKCRjYXJ0SWQ6IFN0cmluZyEpIHtcbiAgICBjYXJ0KGNhcnRfaWQ6ICRjYXJ0SWQpIHtcbiAgICAgIGF2YWlsYWJsZV9wYXltZW50X21ldGhvZHMge1xuICAgICAgICAuLi5hdmFpbGFibGVQYXltZW50TWV0aG9kXG4gICAgICB9XG4gICAgICAke2RhZmZCdWlsZEZyYWdtZW50TmFtZVNwcmVhZCguLi5leHRyYUNhcnRGcmFnbWVudHMpfVxuICAgIH1cbiAgfVxuICAke2F2YWlsYWJsZVBheW1lbnRNZXRob2RGcmFnbWVudH1cbiAgJHtkYWZmQnVpbGRGcmFnbWVudERlZmluaXRpb24oLi4uZXh0cmFDYXJ0RnJhZ21lbnRzKX1cbmA7XG4iXX0=