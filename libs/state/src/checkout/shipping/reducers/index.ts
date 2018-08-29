import { ActionReducerMap, createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import * as fromShipping from './shipping.reducer';
import { DaffodilAddress } from '@daffodil/core';

export interface ShippingState {
  shipping: fromShipping.State;
}

export interface State {
  shipping: ShippingState
}

export const reducers : ActionReducerMap<ShippingState> = {
  shipping: fromShipping.reducer
}

/**
 * Shipping State
 */
export const selectShippingState: MemoizedSelector<object, ShippingState> = createFeatureSelector<ShippingState>('shipping');

export const shippingStateSelector = createSelector(
  selectShippingState,
  (state: ShippingState) => state.shipping
)

export const selectShippingInfoState: MemoizedSelector<object, DaffodilAddress> = createSelector(
  shippingStateSelector,
  fromShipping.getShippingInfo
)

export const selectShippingOptionState: MemoizedSelector<object, string> = createSelector(
  shippingStateSelector,
  fromShipping.getSelectedShippingOptionIndex
)

export const selectIsShippingInfoValid: MemoizedSelector<object, boolean> = createSelector(
  selectShippingInfoState,
  fromShipping.isShippingInfoValid
)
