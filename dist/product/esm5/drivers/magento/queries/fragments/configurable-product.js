/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import gql from 'graphql-tag';
/** @type {?} */
export var magentoConfigurableProductFragment = gql(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  fragment magentoConfigurableProduct on ConfigurableProduct {\n\t\tconfigurable_options {\n\t\t\tattribute_code\n\t\t\tattribute_id\n\t\t\tid\n\t\t\tlabel\n\t\t\tposition\n\t\t\tproduct_id\n\t\t\tvalues {\n\t\t\t\tlabel\n\t\t\t\tvalue_index\n\t\t\t}\n\t\t}\n\t\tvariants {\n\t\t\tattributes {\n\t\t\t\tcode\n\t\t\t\tlabel\n\t\t\t\tvalue_index\n\t\t\t}\n\t\t\tproduct {\n\t\t\t\tsku\n\t\t\t\tprice_range {\n\t\t\t\t\tmaximum_price {\n\t\t\t\t\t\tregular_price {\n\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\tcurrency\n\t\t\t\t\t\t}\n\t\t\t\t\t\tdiscount {\n\t\t\t\t\t\t\tamount_off\n\t\t\t\t\t\t\tpercent_off\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tstock_status\n\t\t\t\timage {\n\t\t\t\t\turl\n\t\t\t\t\tlabel\n\t\t\t\t}\n\t\t\t}\n\t\t}\n  }\n"], ["\n  fragment magentoConfigurableProduct on ConfigurableProduct {\n\t\tconfigurable_options {\n\t\t\tattribute_code\n\t\t\tattribute_id\n\t\t\tid\n\t\t\tlabel\n\t\t\tposition\n\t\t\tproduct_id\n\t\t\tvalues {\n\t\t\t\tlabel\n\t\t\t\tvalue_index\n\t\t\t}\n\t\t}\n\t\tvariants {\n\t\t\tattributes {\n\t\t\t\tcode\n\t\t\t\tlabel\n\t\t\t\tvalue_index\n\t\t\t}\n\t\t\tproduct {\n\t\t\t\tsku\n\t\t\t\tprice_range {\n\t\t\t\t\tmaximum_price {\n\t\t\t\t\t\tregular_price {\n\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\tcurrency\n\t\t\t\t\t\t}\n\t\t\t\t\t\tdiscount {\n\t\t\t\t\t\t\tamount_off\n\t\t\t\t\t\t\tpercent_off\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tstock_status\n\t\t\t\timage {\n\t\t\t\t\turl\n\t\t\t\t\tlabel\n\t\t\t\t}\n\t\t\t}\n\t\t}\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLXByb2R1Y3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvcHJvZHVjdC8iLCJzb3VyY2VzIjpbImRyaXZlcnMvbWFnZW50by9xdWVyaWVzL2ZyYWdtZW50cy9jb25maWd1cmFibGUtcHJvZHVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sR0FBRyxNQUFNLGFBQWEsQ0FBQzs7QUFFOUIsTUFBTSxLQUFPLGtDQUFrQyxHQUFHLEdBQUcscXpCQUFBLDB1QkEwQ3BELElBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuZXhwb3J0IGNvbnN0IG1hZ2VudG9Db25maWd1cmFibGVQcm9kdWN0RnJhZ21lbnQgPSBncWxgXG4gIGZyYWdtZW50IG1hZ2VudG9Db25maWd1cmFibGVQcm9kdWN0IG9uIENvbmZpZ3VyYWJsZVByb2R1Y3Qge1xuXHRcdGNvbmZpZ3VyYWJsZV9vcHRpb25zIHtcblx0XHRcdGF0dHJpYnV0ZV9jb2RlXG5cdFx0XHRhdHRyaWJ1dGVfaWRcblx0XHRcdGlkXG5cdFx0XHRsYWJlbFxuXHRcdFx0cG9zaXRpb25cblx0XHRcdHByb2R1Y3RfaWRcblx0XHRcdHZhbHVlcyB7XG5cdFx0XHRcdGxhYmVsXG5cdFx0XHRcdHZhbHVlX2luZGV4XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHZhcmlhbnRzIHtcblx0XHRcdGF0dHJpYnV0ZXMge1xuXHRcdFx0XHRjb2RlXG5cdFx0XHRcdGxhYmVsXG5cdFx0XHRcdHZhbHVlX2luZGV4XG5cdFx0XHR9XG5cdFx0XHRwcm9kdWN0IHtcblx0XHRcdFx0c2t1XG5cdFx0XHRcdHByaWNlX3JhbmdlIHtcblx0XHRcdFx0XHRtYXhpbXVtX3ByaWNlIHtcblx0XHRcdFx0XHRcdHJlZ3VsYXJfcHJpY2Uge1xuXHRcdFx0XHRcdFx0XHR2YWx1ZVxuXHRcdFx0XHRcdFx0XHRjdXJyZW5jeVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZGlzY291bnQge1xuXHRcdFx0XHRcdFx0XHRhbW91bnRfb2ZmXG5cdFx0XHRcdFx0XHRcdHBlcmNlbnRfb2ZmXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHN0b2NrX3N0YXR1c1xuXHRcdFx0XHRpbWFnZSB7XG5cdFx0XHRcdFx0dXJsXG5cdFx0XHRcdFx0bGFiZWxcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cbiAgfVxuYDtcbiJdfQ==