/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DaffCartItemInputType } from '@daffodil/cart';
import { transformMagentoSimpleCartItem } from './simple-cart-item-transformer';
/**
 * Transforms a MagentoConfigurableCartItem into a DaffCartItem.
 * @param {?} configurableCartItem
 * @return {?}
 */
export function transformMagentoConfigurableCartItem(configurableCartItem) {
    return configurableCartItem ? Object.assign({}, transformMagentoSimpleCartItem(configurableCartItem), { type: DaffCartItemInputType.Configurable, attributes: configurableCartItem.configurable_options.map(transformConfigurableCartItemAttribute) }) : null;
}
/**
 * @param {?} option
 * @return {?}
 */
function transformConfigurableCartItemAttribute(option) {
    return {
        attribute_label: option.option_label,
        value_label: option.value_label
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLWNhcnQtaXRlbS10cmFuc2Zvcm1lci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L2RyaXZlci9tYWdlbnRvLyIsInNvdXJjZXMiOlsidHJhbnNmb3Jtcy9vdXRwdXRzL2NhcnQtaXRlbS9jb25maWd1cmFibGUtY2FydC1pdGVtLXRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUscUJBQXFCLEVBQStELE1BQU0sZ0JBQWdCLENBQUM7QUFHcEgsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7OztBQU1oRixNQUFNLFVBQVUsb0NBQW9DLENBQUMsb0JBQWlEO0lBQ3JHLE9BQU8sb0JBQW9CLENBQUMsQ0FBQyxtQkFDekIsOEJBQThCLENBQUMsb0JBQW9CLENBQUMsSUFDdkQsSUFBSSxFQUFFLHFCQUFxQixDQUFDLFlBQVksRUFDeEMsVUFBVSxFQUFFLG9CQUFvQixDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQyxJQUNoRyxDQUFDLENBQUMsSUFBSSxDQUFBO0FBQ1QsQ0FBQzs7Ozs7QUFFRCxTQUFTLHNDQUFzQyxDQUFDLE1BQThEO0lBQzdHLE9BQU87UUFDTixlQUFlLEVBQUUsTUFBTSxDQUFDLFlBQVk7UUFDcEMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxXQUFXO0tBQy9CLENBQUE7QUFDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGFmZkNhcnRJdGVtSW5wdXRUeXBlLCBEYWZmQ29uZmlndXJhYmxlQ2FydEl0ZW0sIERhZmZDb25maWd1cmFibGVDYXJ0SXRlbUF0dHJpYnV0ZSB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcblxuaW1wb3J0IHsgTWFnZW50b0NvbmZpZ3VyYWJsZUNhcnRJdGVtIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3Jlc3BvbnNlcy9jYXJ0LWl0ZW0nO1xuaW1wb3J0IHsgdHJhbnNmb3JtTWFnZW50b1NpbXBsZUNhcnRJdGVtIH0gZnJvbSAnLi9zaW1wbGUtY2FydC1pdGVtLXRyYW5zZm9ybWVyJztcblxuLyoqXG4gKiBUcmFuc2Zvcm1zIGEgTWFnZW50b0NvbmZpZ3VyYWJsZUNhcnRJdGVtIGludG8gYSBEYWZmQ2FydEl0ZW0uXG4gKiBAcGFyYW0gcmVzcG9uc2UgdGhlIHJlc3BvbnNlIGZyb20gYSBtYWdlbnRvIGNhcnQgcXVlcnkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1NYWdlbnRvQ29uZmlndXJhYmxlQ2FydEl0ZW0oY29uZmlndXJhYmxlQ2FydEl0ZW06IE1hZ2VudG9Db25maWd1cmFibGVDYXJ0SXRlbSk6IERhZmZDb25maWd1cmFibGVDYXJ0SXRlbSB7XG5cdHJldHVybiBjb25maWd1cmFibGVDYXJ0SXRlbSA/IHtcblx0XHQuLi50cmFuc2Zvcm1NYWdlbnRvU2ltcGxlQ2FydEl0ZW0oY29uZmlndXJhYmxlQ2FydEl0ZW0pLFxuXHRcdHR5cGU6IERhZmZDYXJ0SXRlbUlucHV0VHlwZS5Db25maWd1cmFibGUsXG5cdFx0YXR0cmlidXRlczogY29uZmlndXJhYmxlQ2FydEl0ZW0uY29uZmlndXJhYmxlX29wdGlvbnMubWFwKHRyYW5zZm9ybUNvbmZpZ3VyYWJsZUNhcnRJdGVtQXR0cmlidXRlKVxuXHR9IDogbnVsbFxufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1Db25maWd1cmFibGVDYXJ0SXRlbUF0dHJpYnV0ZShvcHRpb246IE1hZ2VudG9Db25maWd1cmFibGVDYXJ0SXRlbVsnY29uZmlndXJhYmxlX29wdGlvbnMnXVswXSk6IERhZmZDb25maWd1cmFibGVDYXJ0SXRlbUF0dHJpYnV0ZSB7XG5cdHJldHVybiB7XG5cdFx0YXR0cmlidXRlX2xhYmVsOiBvcHRpb24ub3B0aW9uX2xhYmVsLFxuXHRcdHZhbHVlX2xhYmVsOiBvcHRpb24udmFsdWVfbGFiZWxcblx0fVxufVxuIl19