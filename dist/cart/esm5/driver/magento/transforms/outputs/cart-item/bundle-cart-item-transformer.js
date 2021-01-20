/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DaffCartItemInputType } from '@daffodil/cart';
import { transformMagentoSimpleCartItem } from './simple-cart-item-transformer';
/**
 * Transforms a MagentoBundleCartItem into a DaffCartItem.
 * @param {?} bundleCartItem
 * @return {?}
 */
export function transformMagentoBundleCartItem(bundleCartItem) {
    return bundleCartItem ? tslib_1.__assign({}, transformMagentoSimpleCartItem(bundleCartItem), { type: DaffCartItemInputType.Composite, options: bundleCartItem.bundle_options.map(transformBundleCartItemOption) }) : null;
}
/**
 * @param {?} option
 * @return {?}
 */
function transformBundleCartItemOption(option) {
    return {
        option_id: option.values[0].id,
        option_label: option.label,
        value_label: option.values[0].label
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLWNhcnQtaXRlbS10cmFuc2Zvcm1lci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L2RyaXZlci9tYWdlbnRvLyIsInNvdXJjZXMiOlsidHJhbnNmb3Jtcy9vdXRwdXRzL2NhcnQtaXRlbS9idW5kbGUtY2FydC1pdGVtLXRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFzRCxNQUFNLGdCQUFnQixDQUFDO0FBRzNHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7QUFNaEYsTUFBTSxVQUFVLDhCQUE4QixDQUFDLGNBQXFDO0lBQ25GLE9BQU8sY0FBYyxDQUFDLENBQUMsc0JBQ25CLDhCQUE4QixDQUFDLGNBQWMsQ0FBQyxJQUNqRCxJQUFJLEVBQUUscUJBQXFCLENBQUMsU0FBUyxFQUNyQyxPQUFPLEVBQUUsY0FBYyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsSUFDeEUsQ0FBQyxDQUFDLElBQUksQ0FBQTtBQUNULENBQUM7Ozs7O0FBRUQsU0FBUyw2QkFBNkIsQ0FBQyxNQUFrRDtJQUN4RixPQUFPO1FBQ04sU0FBUyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUM5QixZQUFZLEVBQUUsTUFBTSxDQUFDLEtBQUs7UUFDMUIsV0FBVyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSztLQUNuQyxDQUFBO0FBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhZmZDYXJ0SXRlbUlucHV0VHlwZSwgRGFmZkNvbXBvc2l0ZUNhcnRJdGVtLCBEYWZmQ29tcG9zaXRlQ2FydEl0ZW1PcHRpb24gfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5cbmltcG9ydCB7IE1hZ2VudG9CdW5kbGVDYXJ0SXRlbSB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9yZXNwb25zZXMvY2FydC1pdGVtJztcbmltcG9ydCB7IHRyYW5zZm9ybU1hZ2VudG9TaW1wbGVDYXJ0SXRlbSB9IGZyb20gJy4vc2ltcGxlLWNhcnQtaXRlbS10cmFuc2Zvcm1lcic7XG5cbi8qKlxuICogVHJhbnNmb3JtcyBhIE1hZ2VudG9CdW5kbGVDYXJ0SXRlbSBpbnRvIGEgRGFmZkNhcnRJdGVtLlxuICogQHBhcmFtIHJlc3BvbnNlIHRoZSByZXNwb25zZSBmcm9tIGEgbWFnZW50byBjYXJ0IHF1ZXJ5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtTWFnZW50b0J1bmRsZUNhcnRJdGVtKGJ1bmRsZUNhcnRJdGVtOiBNYWdlbnRvQnVuZGxlQ2FydEl0ZW0pOiBEYWZmQ29tcG9zaXRlQ2FydEl0ZW0ge1xuXHRyZXR1cm4gYnVuZGxlQ2FydEl0ZW0gPyB7XG5cdFx0Li4udHJhbnNmb3JtTWFnZW50b1NpbXBsZUNhcnRJdGVtKGJ1bmRsZUNhcnRJdGVtKSxcblx0XHR0eXBlOiBEYWZmQ2FydEl0ZW1JbnB1dFR5cGUuQ29tcG9zaXRlLFxuXHRcdG9wdGlvbnM6IGJ1bmRsZUNhcnRJdGVtLmJ1bmRsZV9vcHRpb25zLm1hcCh0cmFuc2Zvcm1CdW5kbGVDYXJ0SXRlbU9wdGlvbilcblx0fSA6IG51bGxcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtQnVuZGxlQ2FydEl0ZW1PcHRpb24ob3B0aW9uOiBNYWdlbnRvQnVuZGxlQ2FydEl0ZW1bJ2J1bmRsZV9vcHRpb25zJ11bMF0pOiBEYWZmQ29tcG9zaXRlQ2FydEl0ZW1PcHRpb24ge1xuXHRyZXR1cm4ge1xuXHRcdG9wdGlvbl9pZDogb3B0aW9uLnZhbHVlc1swXS5pZCxcblx0XHRvcHRpb25fbGFiZWw6IG9wdGlvbi5sYWJlbCxcblx0XHR2YWx1ZV9sYWJlbDogb3B0aW9uLnZhbHVlc1swXS5sYWJlbFxuXHR9XG59XG4iXX0=