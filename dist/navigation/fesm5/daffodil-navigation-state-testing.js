import { Injectable, ɵɵdefineInjectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffNavigationFacade } from '@daffodil/navigation/state';
import { BehaviorSubject } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A mock of the DaffNavigationFacade used to remove any interaction with the ngrx store.
 * This mock should be imported into tests using the DaffNavigationTestingModule.
 * @template T
 */
var MockDaffNavigationFacade = /** @class */ (function () {
    function MockDaffNavigationFacade() {
        this.loading$ = new BehaviorSubject(false);
        this.tree$ = new BehaviorSubject(null);
        this.errors$ = new BehaviorSubject([]);
    }
    /**
     * @param {?} action
     * @return {?}
     */
    MockDaffNavigationFacade.prototype.dispatch = /**
     * @param {?} action
     * @return {?}
     */
    function (action) { };
    MockDaffNavigationFacade.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ MockDaffNavigationFacade.ngInjectableDef = ɵɵdefineInjectable({ factory: function MockDaffNavigationFacade_Factory() { return new MockDaffNavigationFacade(); }, token: MockDaffNavigationFacade, providedIn: "root" });
    return MockDaffNavigationFacade;
}());
if (false) {
    /** @type {?} */
    MockDaffNavigationFacade.prototype.loading$;
    /** @type {?} */
    MockDaffNavigationFacade.prototype.tree$;
    /** @type {?} */
    MockDaffNavigationFacade.prototype.errors$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The DaffNavigationTestingModule provides a mock for the DaffNavigationFacade. This makes testing much simpler
 * by removing any interaction with the ngrx store.
 */
var DaffNavigationTestingModule = /** @class */ (function () {
    function DaffNavigationTestingModule() {
    }
    DaffNavigationTestingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    providers: [
                        { provide: DaffNavigationFacade, useExisting: MockDaffNavigationFacade }
                    ]
                },] }
    ];
    return DaffNavigationTestingModule;
}());

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

export { DaffNavigationTestingModule, MockDaffNavigationFacade };
//# sourceMappingURL=daffodil-navigation-state-testing.js.map
