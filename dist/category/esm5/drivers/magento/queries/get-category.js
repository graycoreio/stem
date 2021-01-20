/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import gql from 'graphql-tag';
/** @type {?} */
export var MagentoGetCategoryQuery = gql(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\nquery MagentoGetCategoryQuery($filters: CategoryFilterInput){\n\tcategoryList(filters: $filters) {\n\t\tid\n\t\tname\n\t\tlevel\n\t\tdescription\n\t\tbreadcrumbs {\n\t\t\tcategory_id\n\t\t\tcategory_name\n\t\t\tcategory_level\n\t\t\tcategory_url_key\n\t\t}\n\t\tproducts {\n\t\t\titems {\n\t\t\t\tsku\n\t\t\t}\n\t\t}\n\t\tchildren_count\n\t}\n}"], ["\nquery MagentoGetCategoryQuery($filters: CategoryFilterInput){\n\tcategoryList(filters: $filters) {\n\t\tid\n\t\tname\n\t\tlevel\n\t\tdescription\n\t\tbreadcrumbs {\n\t\t\tcategory_id\n\t\t\tcategory_name\n\t\t\tcategory_level\n\t\t\tcategory_url_key\n\t\t}\n\t\tproducts {\n\t\t\titems {\n\t\t\t\tsku\n\t\t\t}\n\t\t}\n\t\tchildren_count\n\t}\n}"])));
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWNhdGVnb3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhdGVnb3J5LyIsInNvdXJjZXMiOlsiZHJpdmVycy9tYWdlbnRvL3F1ZXJpZXMvZ2V0LWNhdGVnb3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxHQUFHLE1BQU0sYUFBYSxDQUFDOztBQUU5QixNQUFNLEtBQU8sdUJBQXVCLEdBQUcsR0FBRyx1YUFBQSw0VkFvQnhDLElBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuZXhwb3J0IGNvbnN0IE1hZ2VudG9HZXRDYXRlZ29yeVF1ZXJ5ID0gZ3FsYFxucXVlcnkgTWFnZW50b0dldENhdGVnb3J5UXVlcnkoJGZpbHRlcnM6IENhdGVnb3J5RmlsdGVySW5wdXQpe1xuXHRjYXRlZ29yeUxpc3QoZmlsdGVyczogJGZpbHRlcnMpIHtcblx0XHRpZFxuXHRcdG5hbWVcblx0XHRsZXZlbFxuXHRcdGRlc2NyaXB0aW9uXG5cdFx0YnJlYWRjcnVtYnMge1xuXHRcdFx0Y2F0ZWdvcnlfaWRcblx0XHRcdGNhdGVnb3J5X25hbWVcblx0XHRcdGNhdGVnb3J5X2xldmVsXG5cdFx0XHRjYXRlZ29yeV91cmxfa2V5XG5cdFx0fVxuXHRcdHByb2R1Y3RzIHtcblx0XHRcdGl0ZW1zIHtcblx0XHRcdFx0c2t1XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNoaWxkcmVuX2NvdW50XG5cdH1cbn1gXG4iXX0=