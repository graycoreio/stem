import { Component, NgModule } from '@angular/core';
import { faChevronLeft, faChevronRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { DaffButtonModule } from '@daffodil/design';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BasicButtonComponent {
    constructor() {
        this.faChevronLeft = faChevronLeft;
        this.faChevronRight = faChevronRight;
    }
}
BasicButtonComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'basic-button',
                template: "<button daff-button>Default</button>\n<button daff-button color=\"primary\">Primary</button>\n<button daff-button color=\"secondary\">Secondary</button>\n<button daff-button color=\"tertiary\">Tertiary</button>\n<button daff-button color=\"black\">Black</button>\n<button daff-button color=\"white\">White</button>\n<button daff-button color=\"theme\">Theme</button>\n<button daff-button color=\"theme-contrast\">Theme Contrast</button>\n<button daff-button><fa-icon [icon]=\"faChevronLeft\" daffPrefix></fa-icon>Button</button>\n<button daff-button><fa-icon [icon]=\"faChevronRight\" daffSuffix></fa-icon>Button</button>\n<button daff-button disabled>Disabled</button>\n<a href=\"#\" daff-button>Link</a>",
                styles: [`
    button[daff-button],
    a[daff-button] {
      margin-right: 8px;
    } 
  `]
            }] }
];
if (false) {
    /** @type {?} */
    BasicButtonComponent.prototype.faChevronLeft;
    /** @type {?} */
    BasicButtonComponent.prototype.faChevronRight;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IconButtonComponent {
    constructor() {
        this.faPlus = faPlus;
    }
}
IconButtonComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'icon-button',
                template: "<button daff-icon-button><fa-icon [icon]=\"faPlus\"></fa-icon></button>\n<button daff-icon-button color=\"primary\"><fa-icon [icon]=\"faPlus\"></fa-icon></button>\n<button daff-icon-button color=\"secondary\"><fa-icon [icon]=\"faPlus\"></fa-icon></button>\n<button daff-icon-button color=\"tertiary\"><fa-icon [icon]=\"faPlus\"></fa-icon></button>\n<button daff-icon-button color=\"black\"><fa-icon [icon]=\"faPlus\"></fa-icon></button>\n<button daff-icon-button color=\"white\"><fa-icon [icon]=\"faPlus\"></fa-icon></button>\n<button daff-icon-button color=\"theme\"><fa-icon [icon]=\"faPlus\"></fa-icon></button>\n<button daff-icon-button color=\"theme-contrast\"><fa-icon [icon]=\"faPlus\"></fa-icon></button>\n<button daff-icon-button disabled><fa-icon [icon]=\"faPlus\"></fa-icon></button>"
            }] }
];
if (false) {
    /** @type {?} */
    IconButtonComponent.prototype.faPlus;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RaisedButtonComponent {
    constructor() {
        this.faChevronLeft = faChevronLeft;
        this.faChevronRight = faChevronRight;
    }
}
RaisedButtonComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'raised-button',
                template: "<button daff-raised-button>Default</button>\n<button daff-raised-button color=\"primary\">Primary</button>\n<button daff-raised-button color=\"secondary\">Secondary</button>\n<button daff-raised-button color=\"tertiary\">Tertiary</button>\n<button daff-raised-button color=\"black\">Black</button>\n<button daff-raised-button color=\"white\">White</button>\n<button daff-raised-button color=\"theme\">Theme</button>\n<button daff-raised-button color=\"theme-contrast\">Theme Contrast</button>\n<button daff-raised-button><fa-icon [icon]=\"faChevronLeft\" daffPrefix></fa-icon>Button</button>\n<button daff-raised-button><fa-icon [icon]=\"faChevronRight\" daffSuffix></fa-icon>Button</button>\n<button daff-raised-button disabled>Disabled</button>\n<a href=\"#\" daff-raised-button>Link</a>",
                styles: [`
    button[daff-raised-button],
    a[daff-raised-button] {
      margin-right: 8px;
    } 
  `]
            }] }
];
if (false) {
    /** @type {?} */
    RaisedButtonComponent.prototype.faChevronLeft;
    /** @type {?} */
    RaisedButtonComponent.prototype.faChevronRight;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SizeableButtonComponent {
    constructor() {
        this.faPlus = faPlus;
    }
}
SizeableButtonComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'sizeable-button',
                template: "<h4>Small Buttons</h4>\n\n<button daff-button size=\"sm\">Small Button</button>\n<button daff-raised-button size=\"sm\">Small Raised Button</button>\n<button daff-stroked-button size=\"sm\">Small Stroked Button</button>\n\n<button daff-underline-button size=\"sm\">Small Underline Button</button>\n<button daff-icon-button size=\"sm\"><fa-icon [icon]=\"faPlus\"></fa-icon></button>\n\n<h4>Medium Buttons (Default)</h4>\n\n<button daff-button size=\"md\">Medium Button</button>\n<button daff-raised-button size=\"md\">Medium Raised Button</button>\n<button daff-stroked-button size=\"md\">Medium Stroked Button</button>\n\n<button daff-underline-button size=\"md\">Medium Underline Button</button>\n<button daff-icon-button size=\"md\"><fa-icon [icon]=\"faPlus\"></fa-icon></button>\n\n<h4>Large Buttons</h4>\n\n<button daff-button size=\"lg\">Large Button</button>\n<button daff-raised-button size=\"lg\">Large Raised Button</button>\n<button daff-stroked-button size=\"lg\">Large Stroked Button</button>\n\n\n<button daff-underline-button size=\"lg\">Large Underline Button</button>\n<button daff-icon-button size=\"lg\"><fa-icon [icon]=\"faPlus\"></fa-icon></button>",
                styles: [`
    button {
      margin-right: 8px;
    } 
  `]
            }] }
];
if (false) {
    /** @type {?} */
    SizeableButtonComponent.prototype.faPlus;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StrokedButtonComponent {
    constructor() {
        this.faChevronLeft = faChevronLeft;
        this.faChevronRight = faChevronRight;
    }
}
StrokedButtonComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'stroked-button',
                template: "<button daff-stroked-button>Default</button>\n<button daff-stroked-button color=\"primary\">Primary</button>\n<button daff-stroked-button color=\"secondary\">Secondary</button>\n<button daff-stroked-button color=\"tertiary\">Tertiary</button>\n<button daff-stroked-button color=\"black\">Black</button>\n<button daff-stroked-button color=\"white\">White</button>\n<button daff-stroked-button color=\"theme\">Theme</button>\n<button daff-stroked-button color=\"theme-contrast\">Theme Contrast</button>\n<button daff-stroked-button><fa-icon [icon]=\"faChevronLeft\" daffPrefix></fa-icon>Button</button>\n<button daff-stroked-button><fa-icon [icon]=\"faChevronRight\" daffSuffix></fa-icon>Button</button>\n<button daff-stroked-button disabled>Disabled</button>\n<a href=\"#\" daff-stroked-button>Link</a>",
                styles: [`
    button[daff-stroked-button],
    a[daff-stroked-button] {
      margin-right: 8px;
    } 
  `]
            }] }
];
if (false) {
    /** @type {?} */
    StrokedButtonComponent.prototype.faChevronLeft;
    /** @type {?} */
    StrokedButtonComponent.prototype.faChevronRight;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UnderlineButtonComponent {
    constructor() {
        this.faChevronLeft = faChevronLeft;
        this.faChevronRight = faChevronRight;
    }
}
UnderlineButtonComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'underline-button',
                template: "<button daff-underline-button>Default</button>\n<button daff-underline-button color=\"primary\">Primary</button>\n<button daff-underline-button color=\"secondary\">Secondary</button>\n<button daff-underline-button color=\"tertiary\">Tertiary</button>\n<button daff-underline-button color=\"black\">Black</button>\n<button daff-underline-button color=\"white\">White</button>\n<button daff-underline-button color=\"theme\">Theme</button>\n<button daff-underline-button color=\"theme-contrast\">Theme Contrast</button>\n<button daff-underline-button><fa-icon [icon]=\"faChevronLeft\" daffPrefix></fa-icon>Button</button>\n<button daff-underline-button><fa-icon [icon]=\"faChevronRight\" daffSuffix></fa-icon>Button</button>\n<button daff-underline-button disabled>Disabled</button>\n<a href=\"#\" daff-underline-button>Link</a>",
                styles: [`
    button[daff-underline-button],
    a[daff-underline-button] {
      margin-right: 8px;
    } 
  `]
            }] }
];
if (false) {
    /** @type {?} */
    UnderlineButtonComponent.prototype.faChevronLeft;
    /** @type {?} */
    UnderlineButtonComponent.prototype.faChevronRight;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BasicButtonModule {
}
BasicButtonModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    BasicButtonComponent
                ],
                exports: [
                    BasicButtonComponent
                ],
                imports: [
                    DaffButtonModule,
                    FontAwesomeModule
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IconButtonModule {
}
IconButtonModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    IconButtonComponent
                ],
                exports: [
                    IconButtonComponent
                ],
                imports: [
                    DaffButtonModule,
                    FontAwesomeModule
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RaisedButtonModule {
}
RaisedButtonModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    RaisedButtonComponent
                ],
                exports: [
                    RaisedButtonComponent
                ],
                imports: [
                    DaffButtonModule,
                    FontAwesomeModule
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SizeableButtonModule {
}
SizeableButtonModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SizeableButtonComponent
                ],
                exports: [
                    SizeableButtonComponent
                ],
                imports: [
                    DaffButtonModule,
                    FontAwesomeModule
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StrokedButtonModule {
}
StrokedButtonModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    StrokedButtonComponent
                ],
                exports: [
                    StrokedButtonComponent
                ],
                imports: [
                    DaffButtonModule,
                    FontAwesomeModule
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UnderlineButtonModule {
}
UnderlineButtonModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    UnderlineButtonComponent
                ],
                exports: [
                    UnderlineButtonComponent
                ],
                imports: [
                    DaffButtonModule,
                    FontAwesomeModule
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const BUTTON_EXAMPLES = [
    BasicButtonComponent,
    IconButtonComponent,
    RaisedButtonComponent,
    SizeableButtonComponent,
    StrokedButtonComponent,
    UnderlineButtonComponent
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonExamplesModule {
}
ButtonExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    BasicButtonModule,
                    IconButtonModule,
                    RaisedButtonModule,
                    SizeableButtonModule,
                    StrokedButtonModule,
                    UnderlineButtonModule
                ],
                entryComponents: [
                    ...BUTTON_EXAMPLES
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

export { BUTTON_EXAMPLES, BasicButtonComponent, ButtonExamplesModule, IconButtonComponent, RaisedButtonComponent, SizeableButtonComponent, StrokedButtonComponent, UnderlineButtonComponent, BasicButtonModule as ɵa, IconButtonModule as ɵb, RaisedButtonModule as ɵc, SizeableButtonModule as ɵd, StrokedButtonModule as ɵe, UnderlineButtonModule as ɵf };
//# sourceMappingURL=daffodil-design-button-examples.js.map
