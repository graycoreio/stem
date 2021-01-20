/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DaffCartItemActionTypes, } from '../../actions/public_api';
import { initialState } from '../cart-initial-state';
import { DaffCartOperationType } from '../cart-operation-type.enum';
import { initializeErrorAdder, initializeErrorResetter } from '../errors/error-state-helpers';
import { DaffCartItemLoadingState, initializeLoadingSetter } from '../loading/cart-loading.type';
/** @type {?} */
var addError = initializeErrorAdder(DaffCartOperationType.Item);
/** @type {?} */
var resetErrors = initializeErrorResetter(DaffCartOperationType.Item);
/** @type {?} */
var setLoading = initializeLoadingSetter(DaffCartOperationType.Item);
/**
 * @template T
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function cartItemReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case DaffCartItemActionTypes.CartItemListAction:
        case DaffCartItemActionTypes.CartItemLoadAction:
            return tslib_1.__assign({}, state, setLoading(state.loading, DaffCartItemLoadingState.Resolving));
        case DaffCartItemActionTypes.CartItemAddAction:
            return tslib_1.__assign({}, state, setLoading(state.loading, DaffCartItemLoadingState.Adding));
        case DaffCartItemActionTypes.CartItemListSuccessAction:
            return tslib_1.__assign({}, state, resetErrors(state.errors), { cart: tslib_1.__assign({}, state.cart, { items: action.payload }) }, setLoading(state.loading, DaffCartItemLoadingState.Complete));
        case DaffCartItemActionTypes.CartItemLoadSuccessAction:
            return tslib_1.__assign({}, state, resetErrors(state.errors), { cart: tslib_1.__assign({}, state.cart, { items: state.cart.items.map((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) {
                        return item.item_id === action.payload.item_id
                            ? action.payload
                            : item;
                    })) }) }, setLoading(state.loading, DaffCartItemLoadingState.Complete));
        case DaffCartItemActionTypes.CartItemUpdateSuccessAction:
        case DaffCartItemActionTypes.CartItemAddSuccessAction:
        case DaffCartItemActionTypes.CartItemDeleteSuccessAction:
            return tslib_1.__assign({}, state, resetErrors(state.errors), { cart: tslib_1.__assign({}, state.cart, action.payload) }, setLoading(state.loading, DaffCartItemLoadingState.Complete));
        case DaffCartItemActionTypes.CartItemListFailureAction:
        case DaffCartItemActionTypes.CartItemLoadFailureAction:
        case DaffCartItemActionTypes.CartItemUpdateFailureAction:
        case DaffCartItemActionTypes.CartItemAddFailureAction:
        case DaffCartItemActionTypes.CartItemDeleteFailureAction:
            return tslib_1.__assign({}, state, addError(state.errors, action.payload), setLoading(state.loading, DaffCartItemLoadingState.Complete));
        default:
            return state;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9zdGF0ZS8iLCJzb3VyY2VzIjpbInJlZHVjZXJzL2NhcnQtaXRlbS9jYXJ0LWl0ZW0ucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFDTCx1QkFBdUIsR0FDeEIsTUFBTSwwQkFBMEIsQ0FBQztBQUNsQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHckQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDcEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDOUYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7O0lBRTNGLFFBQVEsR0FBRyxvQkFBb0IsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUM7O0lBQzNELFdBQVcsR0FBRyx1QkFBdUIsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUM7O0lBQ2pFLFVBQVUsR0FBRyx1QkFBdUIsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUM7Ozs7Ozs7QUFFdEUsTUFBTSxVQUFVLGVBQWUsQ0FDN0IsS0FBb0IsRUFDcEIsTUFBbUI7SUFEbkIsc0JBQUEsRUFBQSxvQkFBb0I7SUFHcEIsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssdUJBQXVCLENBQUMsa0JBQWtCLENBQUM7UUFDaEQsS0FBSyx1QkFBdUIsQ0FBQyxrQkFBa0I7WUFDN0MsNEJBQ0ssS0FBSyxFQUNMLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLHdCQUF3QixDQUFDLFNBQVMsQ0FBQyxFQUNoRTtRQUVOLEtBQUssdUJBQXVCLENBQUMsaUJBQWlCO1lBQzdDLDRCQUNRLEtBQUssRUFDTCxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsRUFDN0Q7UUFFSixLQUFLLHVCQUF1QixDQUFDLHlCQUF5QjtZQUNwRCw0QkFDSyxLQUFLLEVBQ0wsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFDNUIsSUFBSSx1QkFDQyxLQUFLLENBQUMsSUFBSSxJQUNiLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxPQUVwQixVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsRUFDL0Q7UUFFSixLQUFLLHVCQUF1QixDQUFDLHlCQUF5QjtZQUNwRCw0QkFDSyxLQUFLLEVBQ0wsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFDNUIsSUFBSSx1QkFDQyxLQUFLLENBQUMsSUFBSSxJQUNiLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHOzs7O29CQUFDLFVBQUEsSUFBSTt3QkFDOUIsT0FBQSxJQUFJLENBQUMsT0FBTyxLQUFLLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTzs0QkFDckMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPOzRCQUNoQixDQUFDLENBQUMsSUFBSTtvQkFGUixDQUVRLEVBQ1QsT0FFQSxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsRUFDL0Q7UUFFSixLQUFLLHVCQUF1QixDQUFDLDJCQUEyQixDQUFDO1FBQ3pELEtBQUssdUJBQXVCLENBQUMsd0JBQXdCLENBQUM7UUFDdEQsS0FBSyx1QkFBdUIsQ0FBQywyQkFBMkI7WUFDdEQsNEJBQ0ssS0FBSyxFQUNMLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQzVCLElBQUksdUJBQ0MsS0FBSyxDQUFDLElBQUksRUFDVixNQUFNLENBQUMsT0FBTyxLQUVoQixVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsRUFDL0Q7UUFFSixLQUFLLHVCQUF1QixDQUFDLHlCQUF5QixDQUFDO1FBQ3ZELEtBQUssdUJBQXVCLENBQUMseUJBQXlCLENBQUM7UUFDdkQsS0FBSyx1QkFBdUIsQ0FBQywyQkFBMkIsQ0FBQztRQUN6RCxLQUFLLHVCQUF1QixDQUFDLHdCQUF3QixDQUFDO1FBQ3RELEtBQUssdUJBQXVCLENBQUMsMkJBQTJCO1lBQ3RELDRCQUNLLEtBQUssRUFDTCxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ3RDLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLHdCQUF3QixDQUFDLFFBQVEsQ0FBQyxFQUMvRDtRQUVKO1lBQ0UsT0FBTyxLQUFLLENBQUM7S0FDaEI7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGFmZkNhcnQgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5cbmltcG9ydCB7XG4gIERhZmZDYXJ0SXRlbUFjdGlvblR5cGVzLFxufSBmcm9tICcuLi8uLi9hY3Rpb25zL3B1YmxpY19hcGknO1xuaW1wb3J0IHsgaW5pdGlhbFN0YXRlIH0gZnJvbSAnLi4vY2FydC1pbml0aWFsLXN0YXRlJztcbmltcG9ydCB7IERhZmZDYXJ0UmVkdWNlclN0YXRlIH0gZnJvbSAnLi4vY2FydC1zdGF0ZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQWN0aW9uVHlwZXMgfSBmcm9tICcuLi9hY3Rpb24tdHlwZXMudHlwZSc7XG5pbXBvcnQgeyBEYWZmQ2FydE9wZXJhdGlvblR5cGUgfSBmcm9tICcuLi9jYXJ0LW9wZXJhdGlvbi10eXBlLmVudW0nO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZUVycm9yQWRkZXIsIGluaXRpYWxpemVFcnJvclJlc2V0dGVyIH0gZnJvbSAnLi4vZXJyb3JzL2Vycm9yLXN0YXRlLWhlbHBlcnMnO1xuaW1wb3J0IHsgRGFmZkNhcnRJdGVtTG9hZGluZ1N0YXRlLCBpbml0aWFsaXplTG9hZGluZ1NldHRlciB9IGZyb20gJy4uL2xvYWRpbmcvY2FydC1sb2FkaW5nLnR5cGUnO1xuXG5jb25zdCBhZGRFcnJvciA9IGluaXRpYWxpemVFcnJvckFkZGVyKERhZmZDYXJ0T3BlcmF0aW9uVHlwZS5JdGVtKTtcbmNvbnN0IHJlc2V0RXJyb3JzID0gaW5pdGlhbGl6ZUVycm9yUmVzZXR0ZXIoRGFmZkNhcnRPcGVyYXRpb25UeXBlLkl0ZW0pO1xuY29uc3Qgc2V0TG9hZGluZyA9IGluaXRpYWxpemVMb2FkaW5nU2V0dGVyKERhZmZDYXJ0T3BlcmF0aW9uVHlwZS5JdGVtKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNhcnRJdGVtUmVkdWNlcjxUIGV4dGVuZHMgRGFmZkNhcnQ+KFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBBY3Rpb25UeXBlc1xuKTogRGFmZkNhcnRSZWR1Y2VyU3RhdGU8VD4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBEYWZmQ2FydEl0ZW1BY3Rpb25UeXBlcy5DYXJ0SXRlbUxpc3RBY3Rpb246XG4gICAgY2FzZSBEYWZmQ2FydEl0ZW1BY3Rpb25UeXBlcy5DYXJ0SXRlbUxvYWRBY3Rpb246XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLi4uc2V0TG9hZGluZyhzdGF0ZS5sb2FkaW5nLCBEYWZmQ2FydEl0ZW1Mb2FkaW5nU3RhdGUuUmVzb2x2aW5nKVxuICAgICAgfTtcblxuXHRcdGNhc2UgRGFmZkNhcnRJdGVtQWN0aW9uVHlwZXMuQ2FydEl0ZW1BZGRBY3Rpb246XG5cdFx0XHRyZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLi4uc2V0TG9hZGluZyhzdGF0ZS5sb2FkaW5nLCBEYWZmQ2FydEl0ZW1Mb2FkaW5nU3RhdGUuQWRkaW5nKVxuICAgICAgfTtcblxuICAgIGNhc2UgRGFmZkNhcnRJdGVtQWN0aW9uVHlwZXMuQ2FydEl0ZW1MaXN0U3VjY2Vzc0FjdGlvbjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAuLi5yZXNldEVycm9ycyhzdGF0ZS5lcnJvcnMpLFxuICAgICAgICBjYXJ0OiB7XG4gICAgICAgICAgLi4uc3RhdGUuY2FydCxcbiAgICAgICAgICBpdGVtczogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgfSxcbiAgICAgICAgLi4uc2V0TG9hZGluZyhzdGF0ZS5sb2FkaW5nLCBEYWZmQ2FydEl0ZW1Mb2FkaW5nU3RhdGUuQ29tcGxldGUpLFxuICAgICAgfTtcblxuICAgIGNhc2UgRGFmZkNhcnRJdGVtQWN0aW9uVHlwZXMuQ2FydEl0ZW1Mb2FkU3VjY2Vzc0FjdGlvbjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAuLi5yZXNldEVycm9ycyhzdGF0ZS5lcnJvcnMpLFxuICAgICAgICBjYXJ0OiB7XG4gICAgICAgICAgLi4uc3RhdGUuY2FydCxcbiAgICAgICAgICBpdGVtczogc3RhdGUuY2FydC5pdGVtcy5tYXAoaXRlbSA9PlxuICAgICAgICAgICAgaXRlbS5pdGVtX2lkID09PSBhY3Rpb24ucGF5bG9hZC5pdGVtX2lkXG4gICAgICAgICAgICAgID8gYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgICAgOiBpdGVtXG4gICAgICAgICAgKVxuICAgICAgICB9LFxuICAgICAgICAuLi5zZXRMb2FkaW5nKHN0YXRlLmxvYWRpbmcsIERhZmZDYXJ0SXRlbUxvYWRpbmdTdGF0ZS5Db21wbGV0ZSksXG4gICAgICB9O1xuXG4gICAgY2FzZSBEYWZmQ2FydEl0ZW1BY3Rpb25UeXBlcy5DYXJ0SXRlbVVwZGF0ZVN1Y2Nlc3NBY3Rpb246XG4gICAgY2FzZSBEYWZmQ2FydEl0ZW1BY3Rpb25UeXBlcy5DYXJ0SXRlbUFkZFN1Y2Nlc3NBY3Rpb246XG4gICAgY2FzZSBEYWZmQ2FydEl0ZW1BY3Rpb25UeXBlcy5DYXJ0SXRlbURlbGV0ZVN1Y2Nlc3NBY3Rpb246XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLi4ucmVzZXRFcnJvcnMoc3RhdGUuZXJyb3JzKSxcbiAgICAgICAgY2FydDoge1xuICAgICAgICAgIC4uLnN0YXRlLmNhcnQsXG4gICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWRcbiAgICAgICAgfSxcbiAgICAgICAgLi4uc2V0TG9hZGluZyhzdGF0ZS5sb2FkaW5nLCBEYWZmQ2FydEl0ZW1Mb2FkaW5nU3RhdGUuQ29tcGxldGUpLFxuICAgICAgfTtcblxuICAgIGNhc2UgRGFmZkNhcnRJdGVtQWN0aW9uVHlwZXMuQ2FydEl0ZW1MaXN0RmFpbHVyZUFjdGlvbjpcbiAgICBjYXNlIERhZmZDYXJ0SXRlbUFjdGlvblR5cGVzLkNhcnRJdGVtTG9hZEZhaWx1cmVBY3Rpb246XG4gICAgY2FzZSBEYWZmQ2FydEl0ZW1BY3Rpb25UeXBlcy5DYXJ0SXRlbVVwZGF0ZUZhaWx1cmVBY3Rpb246XG4gICAgY2FzZSBEYWZmQ2FydEl0ZW1BY3Rpb25UeXBlcy5DYXJ0SXRlbUFkZEZhaWx1cmVBY3Rpb246XG4gICAgY2FzZSBEYWZmQ2FydEl0ZW1BY3Rpb25UeXBlcy5DYXJ0SXRlbURlbGV0ZUZhaWx1cmVBY3Rpb246XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLi4uYWRkRXJyb3Ioc3RhdGUuZXJyb3JzLCBhY3Rpb24ucGF5bG9hZCksXG4gICAgICAgIC4uLnNldExvYWRpbmcoc3RhdGUubG9hZGluZywgRGFmZkNhcnRJdGVtTG9hZGluZ1N0YXRlLkNvbXBsZXRlKSxcbiAgICAgIH07XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iXX0=