import { Injectable, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffAuthorizeNetDriver } from '@daffodil/authorizenet/driver';
import { HttpClient } from '@angular/common/http';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffInMemoryAuthorizeNetService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.url = '/api/authorizenet';
    }
    /**
     * @param {?} paymentTokenRequest
     * @return {?}
     */
    generateToken(paymentTokenRequest) {
        return this.http.post(this.url + '/generateToken', paymentTokenRequest);
    }
}
DaffInMemoryAuthorizeNetService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryAuthorizeNetService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ DaffInMemoryAuthorizeNetService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryAuthorizeNetService_Factory() { return new DaffInMemoryAuthorizeNetService(ɵɵinject(HttpClient)); }, token: DaffInMemoryAuthorizeNetService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffInMemoryAuthorizeNetService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryAuthorizeNetService.prototype.http;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffAuthorizeNetInMemoryDriverModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DaffAuthorizeNetInMemoryDriverModule,
            providers: [
                {
                    provide: DaffAuthorizeNetDriver,
                    useExisting: DaffInMemoryAuthorizeNetService
                }
            ]
        };
    }
}
DaffAuthorizeNetInMemoryDriverModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DaffAuthorizeNetInMemoryDriverModule, DaffInMemoryAuthorizeNetService };
//# sourceMappingURL=daffodil-authorizenet-driver-in-memory.js.map
