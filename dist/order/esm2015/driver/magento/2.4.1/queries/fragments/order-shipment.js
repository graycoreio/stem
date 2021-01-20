/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
import { orderShipmentItemFragment } from './order-shipment-item';
import { orderShipmentTrackingFragment } from './order-shipment-tracking';
/** @type {?} */
export const orderShipmentFragment = gql `
  fragment orderShipment on OrderShipment {
    __typename
    id
    tracking {
      ...orderShipmentTracking
    }
    items {
      ...orderShipmentItem
    }
  }
  ${orderShipmentItemFragment}
  ${orderShipmentTrackingFragment}
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItc2hpcG1lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvb3JkZXIvZHJpdmVyL21hZ2VudG8vMi40LjEvIiwic291cmNlcyI6WyJxdWVyaWVzL2ZyYWdtZW50cy9vcmRlci1zaGlwbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxHQUFHLE1BQU0sYUFBYSxDQUFDO0FBRTlCLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztBQUUxRSxNQUFNLE9BQU8scUJBQXFCLEdBQUcsR0FBRyxDQUFBOzs7Ozs7Ozs7OztJQVdwQyx5QkFBeUI7SUFDekIsNkJBQTZCO0NBQ2hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5cbmltcG9ydCB7IG9yZGVyU2hpcG1lbnRJdGVtRnJhZ21lbnQgfSBmcm9tICcuL29yZGVyLXNoaXBtZW50LWl0ZW0nO1xuaW1wb3J0IHsgb3JkZXJTaGlwbWVudFRyYWNraW5nRnJhZ21lbnQgfSBmcm9tICcuL29yZGVyLXNoaXBtZW50LXRyYWNraW5nJztcblxuZXhwb3J0IGNvbnN0IG9yZGVyU2hpcG1lbnRGcmFnbWVudCA9IGdxbGBcbiAgZnJhZ21lbnQgb3JkZXJTaGlwbWVudCBvbiBPcmRlclNoaXBtZW50IHtcbiAgICBfX3R5cGVuYW1lXG4gICAgaWRcbiAgICB0cmFja2luZyB7XG4gICAgICAuLi5vcmRlclNoaXBtZW50VHJhY2tpbmdcbiAgICB9XG4gICAgaXRlbXMge1xuICAgICAgLi4ub3JkZXJTaGlwbWVudEl0ZW1cbiAgICB9XG4gIH1cbiAgJHtvcmRlclNoaXBtZW50SXRlbUZyYWdtZW50fVxuICAke29yZGVyU2hpcG1lbnRUcmFja2luZ0ZyYWdtZW50fVxuYDtcbiJdfQ==