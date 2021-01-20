/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import gql from 'graphql-tag';
/** @type {?} */
export var createCustomerMutation = gql(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  mutation CreateCustomer(\n    $email: String!,\n    $password: String!,\n    $firstname: String!,\n    $lastname: String!,\n  ) {\n    createCustomer(input: {\n      firstname: $firstname,\n      lastname: $lastname,\n      email: $email,\n      password: $password\n    })\n  }\n"], ["\n  mutation CreateCustomer(\n    $email: String!,\n    $password: String!,\n    $firstname: String!,\n    $lastname: String!,\n  ) {\n    createCustomer(input: {\n      firstname: $firstname,\n      lastname: $lastname,\n      email: $email,\n      password: $password\n    })\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWN1c3RvbWVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2F1dGgvIiwic291cmNlcyI6WyJkcml2ZXJzL21hZ2VudG8vcXVlcmllcy9jcmVhdGUtY3VzdG9tZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEdBQUcsTUFBTSxhQUFhLENBQUM7O0FBRTlCLE1BQU0sS0FBTyxzQkFBc0IsR0FBRyxHQUFHLHlXQUFBLDhSQWN4QyxJQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDdXN0b21lck11dGF0aW9uID0gZ3FsYFxuICBtdXRhdGlvbiBDcmVhdGVDdXN0b21lcihcbiAgICAkZW1haWw6IFN0cmluZyEsXG4gICAgJHBhc3N3b3JkOiBTdHJpbmchLFxuICAgICRmaXJzdG5hbWU6IFN0cmluZyEsXG4gICAgJGxhc3RuYW1lOiBTdHJpbmchLFxuICApIHtcbiAgICBjcmVhdGVDdXN0b21lcihpbnB1dDoge1xuICAgICAgZmlyc3RuYW1lOiAkZmlyc3RuYW1lLFxuICAgICAgbGFzdG5hbWU6ICRsYXN0bmFtZSxcbiAgICAgIGVtYWlsOiAkZW1haWwsXG4gICAgICBwYXNzd29yZDogJHBhc3N3b3JkXG4gICAgfSlcbiAgfVxuYDtcbiJdfQ==