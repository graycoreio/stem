import { Injectable, ɵɵdefineInjectable } from '@angular/core';
import { random, date, image, internet } from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import { MockDaffPersonalAddress } from '@daffodil/geography/testing';
import { DaffOrderItemType, DaffOrderTotalTypeEnum } from '@daffodil/order';

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MockOrderAddress = /** @class */ (function (_super) {
    __extends(MockOrderAddress, _super);
    function MockOrderAddress() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.order_id = random.number({ min: 1, max: 1000 });
        return _this;
    }
    return MockOrderAddress;
}(MockDaffPersonalAddress));
if (false) {
    /** @type {?} */
    MockOrderAddress.prototype.order_id;
}
var DaffOrderAddressFactory = /** @class */ (function (_super) {
    __extends(DaffOrderAddressFactory, _super);
    function DaffOrderAddressFactory() {
        return _super.call(this, MockOrderAddress) || this;
    }
    DaffOrderAddressFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffOrderAddressFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffOrderAddressFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffOrderAddressFactory_Factory() { return new DaffOrderAddressFactory(); }, token: DaffOrderAddressFactory, providedIn: "root" });
    return DaffOrderAddressFactory;
}(DaffModelFactory));

var __extends$1 = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MockOrderCoupon = /** @class */ (function () {
    function MockOrderCoupon() {
        this.code = random.alphaNumeric(10);
    }
    return MockOrderCoupon;
}());
if (false) {
    /** @type {?} */
    MockOrderCoupon.prototype.code;
}
;
var DaffOrderCouponFactory = /** @class */ (function (_super) {
    __extends$1(DaffOrderCouponFactory, _super);
    function DaffOrderCouponFactory() {
        return _super.call(this, MockOrderCoupon) || this;
    }
    DaffOrderCouponFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffOrderCouponFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffOrderCouponFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffOrderCouponFactory_Factory() { return new DaffOrderCouponFactory(); }, token: DaffOrderCouponFactory, providedIn: "root" });
    return DaffOrderCouponFactory;
}(DaffModelFactory));

var __extends$2 = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MockOrderInvoice = /** @class */ (function () {
    function MockOrderInvoice() {
        this.items = [];
        this.totals = [];
        this.billing_address = null;
        this.shipping_address = null;
        this.payment = null;
        this.shipping_method = null;
    }
    return MockOrderInvoice;
}());
if (false) {
    /** @type {?} */
    MockOrderInvoice.prototype.items;
    /** @type {?} */
    MockOrderInvoice.prototype.totals;
    /** @type {?} */
    MockOrderInvoice.prototype.billing_address;
    /** @type {?} */
    MockOrderInvoice.prototype.shipping_address;
    /** @type {?} */
    MockOrderInvoice.prototype.payment;
    /** @type {?} */
    MockOrderInvoice.prototype.shipping_method;
}
;
var DaffOrderInvoiceFactory = /** @class */ (function (_super) {
    __extends$2(DaffOrderInvoiceFactory, _super);
    function DaffOrderInvoiceFactory() {
        return _super.call(this, MockOrderInvoice) || this;
    }
    DaffOrderInvoiceFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffOrderInvoiceFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffOrderInvoiceFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffOrderInvoiceFactory_Factory() { return new DaffOrderInvoiceFactory(); }, token: DaffOrderInvoiceFactory, providedIn: "root" });
    return DaffOrderInvoiceFactory;
}(DaffModelFactory));

var __extends$3 = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MockOrderPayment = /** @class */ (function () {
    function MockOrderPayment() {
        this.payment_id = random.number({ min: 1, max: 1000 });
        this.order_id = random.number({ min: 1, max: 1000 });
        this.created_at = date.past().toString();
        this.updated_at = date.past().toString();
        this.method = 'card';
        this.cc_type = 'visa';
        this.cc_last4 = random.number({ min: 1000, max: 9999 }).toString();
        this.cc_owner = 'owner';
        this.cc_exp_month = 'month';
        this.cc_exp_year = 'year';
    }
    return MockOrderPayment;
}());
if (false) {
    /** @type {?} */
    MockOrderPayment.prototype.payment_id;
    /** @type {?} */
    MockOrderPayment.prototype.order_id;
    /** @type {?} */
    MockOrderPayment.prototype.created_at;
    /** @type {?} */
    MockOrderPayment.prototype.updated_at;
    /** @type {?} */
    MockOrderPayment.prototype.method;
    /** @type {?} */
    MockOrderPayment.prototype.cc_type;
    /** @type {?} */
    MockOrderPayment.prototype.cc_last4;
    /** @type {?} */
    MockOrderPayment.prototype.cc_owner;
    /** @type {?} */
    MockOrderPayment.prototype.cc_exp_month;
    /** @type {?} */
    MockOrderPayment.prototype.cc_exp_year;
}
var DaffOrderPaymentFactory = /** @class */ (function (_super) {
    __extends$3(DaffOrderPaymentFactory, _super);
    function DaffOrderPaymentFactory() {
        return _super.call(this, MockOrderPayment) || this;
    }
    DaffOrderPaymentFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffOrderPaymentFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffOrderPaymentFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffOrderPaymentFactory_Factory() { return new DaffOrderPaymentFactory(); }, token: DaffOrderPaymentFactory, providedIn: "root" });
    return DaffOrderPaymentFactory;
}(DaffModelFactory));

var __extends$4 = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MockOrderItem = /** @class */ (function () {
    function MockOrderItem() {
        this.item_id = random.number({ min: 1, max: 1000 });
        this.image = {
            url: image.imageUrl(),
            id: String(random.number({ min: 1, max: 1000 })),
            label: random.word()
        };
        this.order_id = random.number({ min: 1, max: 1000 });
        this.qty_ordered = random.number({ min: 1, max: 1000 });
        this.qty_canceled = random.number({ min: 1, max: 1000 });
        this.qty_fulfilled = random.number({ min: 1, max: 1000 });
        this.created_at = date.past().toString();
        this.updated_at = date.past().toString();
        this.product_id = random.number({ min: 1, max: 1000 });
        this.parent_item_id = random.number({ min: 1, max: 1000 });
        this.sku = random.alphaNumeric(20);
        this.name = random.word();
        this.weight = random.number({ min: 1, max: 1000 });
        this.qty = random.number({ min: 1, max: 10 });
        this.price = random.number({ min: 1, max: 1000 });
        this.discount_amount = random.number({ min: 1, max: this.price });
        this.discount_percent = Math.floor(this.discount_amount / this.price * 100);
        this.tax_percent = random.number({ min: 1, max: 10 });
        this.tax_amount = random.number({ min: 1, max: 10 });
        this.row_total = this.price * this.qty;
        this.row_total_with_discount = (this.price - this.discount_amount) * this.qty;
        this.row_weight = random.number({ min: 1, max: 100 });
        this.tax_before_discount = random.number({ min: 1, max: 100 });
        this.type = DaffOrderItemType.Simple;
    }
    return MockOrderItem;
}());
if (false) {
    /** @type {?} */
    MockOrderItem.prototype.item_id;
    /** @type {?} */
    MockOrderItem.prototype.image;
    /** @type {?} */
    MockOrderItem.prototype.order_id;
    /** @type {?} */
    MockOrderItem.prototype.qty_ordered;
    /** @type {?} */
    MockOrderItem.prototype.qty_canceled;
    /** @type {?} */
    MockOrderItem.prototype.qty_fulfilled;
    /** @type {?} */
    MockOrderItem.prototype.created_at;
    /** @type {?} */
    MockOrderItem.prototype.updated_at;
    /** @type {?} */
    MockOrderItem.prototype.product_id;
    /** @type {?} */
    MockOrderItem.prototype.parent_item_id;
    /** @type {?} */
    MockOrderItem.prototype.sku;
    /** @type {?} */
    MockOrderItem.prototype.name;
    /** @type {?} */
    MockOrderItem.prototype.weight;
    /** @type {?} */
    MockOrderItem.prototype.qty;
    /** @type {?} */
    MockOrderItem.prototype.price;
    /** @type {?} */
    MockOrderItem.prototype.discount_amount;
    /** @type {?} */
    MockOrderItem.prototype.discount_percent;
    /** @type {?} */
    MockOrderItem.prototype.tax_percent;
    /** @type {?} */
    MockOrderItem.prototype.tax_amount;
    /** @type {?} */
    MockOrderItem.prototype.row_total;
    /** @type {?} */
    MockOrderItem.prototype.row_total_with_discount;
    /** @type {?} */
    MockOrderItem.prototype.row_weight;
    /** @type {?} */
    MockOrderItem.prototype.tax_before_discount;
    /** @type {?} */
    MockOrderItem.prototype.type;
}
var DaffOrderItemFactory = /** @class */ (function (_super) {
    __extends$4(DaffOrderItemFactory, _super);
    function DaffOrderItemFactory() {
        return _super.call(this, MockOrderItem) || this;
    }
    DaffOrderItemFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffOrderItemFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffOrderItemFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffOrderItemFactory_Factory() { return new DaffOrderItemFactory(); }, token: DaffOrderItemFactory, providedIn: "root" });
    return DaffOrderItemFactory;
}(DaffModelFactory));

var __extends$5 = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MockCompositeOrderItem = /** @class */ (function (_super) {
    __extends$5(MockCompositeOrderItem, _super);
    function MockCompositeOrderItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = DaffOrderItemType.Composite;
        _this.options = [
            {
                option_label: random.word(),
                value_label: random.word()
            },
            {
                option_label: random.word(),
                value_label: random.word()
            }
        ];
        return _this;
    }
    return MockCompositeOrderItem;
}(MockOrderItem));
if (false) {
    /** @type {?} */
    MockCompositeOrderItem.prototype.type;
    /** @type {?} */
    MockCompositeOrderItem.prototype.options;
}
var DaffCompositeOrderItemFactory = /** @class */ (function (_super) {
    __extends$5(DaffCompositeOrderItemFactory, _super);
    function DaffCompositeOrderItemFactory() {
        return _super.call(this, MockCompositeOrderItem) || this;
    }
    DaffCompositeOrderItemFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffCompositeOrderItemFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffCompositeOrderItemFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffCompositeOrderItemFactory_Factory() { return new DaffCompositeOrderItemFactory(); }, token: DaffCompositeOrderItemFactory, providedIn: "root" });
    return DaffCompositeOrderItemFactory;
}(DaffModelFactory));

var __extends$6 = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MockConfigurableOrderItem = /** @class */ (function (_super) {
    __extends$6(MockConfigurableOrderItem, _super);
    function MockConfigurableOrderItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = DaffOrderItemType.Configurable;
        _this.attributes = [
            {
                attribute_label: 'Color',
                value_label: 'Red'
            },
            {
                attribute_label: 'Size',
                value_label: 'M'
            }
        ];
        return _this;
    }
    return MockConfigurableOrderItem;
}(MockOrderItem));
if (false) {
    /** @type {?} */
    MockConfigurableOrderItem.prototype.type;
    /** @type {?} */
    MockConfigurableOrderItem.prototype.attributes;
}
var DaffConfigurableOrderItemFactory = /** @class */ (function (_super) {
    __extends$6(DaffConfigurableOrderItemFactory, _super);
    function DaffConfigurableOrderItemFactory() {
        return _super.call(this, MockConfigurableOrderItem) || this;
    }
    DaffConfigurableOrderItemFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffConfigurableOrderItemFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffConfigurableOrderItemFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffConfigurableOrderItemFactory_Factory() { return new DaffConfigurableOrderItemFactory(); }, token: DaffConfigurableOrderItemFactory, providedIn: "root" });
    return DaffConfigurableOrderItemFactory;
}(DaffModelFactory));

var __extends$7 = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MockOrderShipmentItem = /** @class */ (function () {
    function MockOrderShipmentItem() {
        this.item = null;
        this.qty = random.number({ min: 1, max: 100 });
    }
    return MockOrderShipmentItem;
}());
if (false) {
    /** @type {?} */
    MockOrderShipmentItem.prototype.item;
    /** @type {?} */
    MockOrderShipmentItem.prototype.qty;
}
;
var DaffOrderShipmentItemFactory = /** @class */ (function (_super) {
    __extends$7(DaffOrderShipmentItemFactory, _super);
    function DaffOrderShipmentItemFactory() {
        return _super.call(this, MockOrderShipmentItem) || this;
    }
    DaffOrderShipmentItemFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffOrderShipmentItemFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffOrderShipmentItemFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffOrderShipmentItemFactory_Factory() { return new DaffOrderShipmentItemFactory(); }, token: DaffOrderShipmentItemFactory, providedIn: "root" });
    return DaffOrderShipmentItemFactory;
}(DaffModelFactory));

var __extends$8 = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MockOrderShipmentTracking = /** @class */ (function () {
    function MockOrderShipmentTracking() {
        this.tracking_number = random.alphaNumeric(16);
        this.tracking_url = internet.url();
        this.carrier = random.word();
        this.carrier_logo = internet.url();
        this.title = random.word();
    }
    return MockOrderShipmentTracking;
}());
if (false) {
    /** @type {?} */
    MockOrderShipmentTracking.prototype.tracking_number;
    /** @type {?} */
    MockOrderShipmentTracking.prototype.tracking_url;
    /** @type {?} */
    MockOrderShipmentTracking.prototype.carrier;
    /** @type {?} */
    MockOrderShipmentTracking.prototype.carrier_logo;
    /** @type {?} */
    MockOrderShipmentTracking.prototype.title;
}
;
var DaffOrderShipmentTrackingFactory = /** @class */ (function (_super) {
    __extends$8(DaffOrderShipmentTrackingFactory, _super);
    function DaffOrderShipmentTrackingFactory() {
        return _super.call(this, MockOrderShipmentTracking) || this;
    }
    DaffOrderShipmentTrackingFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffOrderShipmentTrackingFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffOrderShipmentTrackingFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffOrderShipmentTrackingFactory_Factory() { return new DaffOrderShipmentTrackingFactory(); }, token: DaffOrderShipmentTrackingFactory, providedIn: "root" });
    return DaffOrderShipmentTrackingFactory;
}(DaffModelFactory));

var __extends$9 = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MockOrderShipment = /** @class */ (function () {
    function MockOrderShipment() {
        this.tracking = [];
        this.items = [];
        this.carrier = random.word();
        this.carrier_title = random.word();
        this.code = random.word();
        this.method = random.word();
        this.method_description = random.word();
    }
    return MockOrderShipment;
}());
if (false) {
    /** @type {?} */
    MockOrderShipment.prototype.tracking;
    /** @type {?} */
    MockOrderShipment.prototype.items;
    /** @type {?} */
    MockOrderShipment.prototype.carrier;
    /** @type {?} */
    MockOrderShipment.prototype.carrier_title;
    /** @type {?} */
    MockOrderShipment.prototype.code;
    /** @type {?} */
    MockOrderShipment.prototype.method;
    /** @type {?} */
    MockOrderShipment.prototype.method_description;
}
;
var DaffOrderShipmentFactory = /** @class */ (function (_super) {
    __extends$9(DaffOrderShipmentFactory, _super);
    function DaffOrderShipmentFactory() {
        return _super.call(this, MockOrderShipment) || this;
    }
    DaffOrderShipmentFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffOrderShipmentFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffOrderShipmentFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffOrderShipmentFactory_Factory() { return new DaffOrderShipmentFactory(); }, token: DaffOrderShipmentFactory, providedIn: "root" });
    return DaffOrderShipmentFactory;
}(DaffModelFactory));

var __extends$a = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MockOrderShippingMethod = /** @class */ (function () {
    function MockOrderShippingMethod() {
        this.rate_id = random.number({ min: 1, max: 1000 });
        this.address_id = random.number({ min: 1, max: 1000 });
        this.order_id = random.number({ min: 1, max: 1000 });
        this.created_at = date.past().toString();
        this.updated_at = date.past().toString();
        this.carrier = random.word();
        this.carrier_title = random.word();
        this.code = random.word();
        this.method = random.word();
        this.method_description = random.word();
        this.price = random.number({ min: 1, max: 1000 });
        this.error_message = random.word();
        this.method_title = random.word();
    }
    return MockOrderShippingMethod;
}());
if (false) {
    /** @type {?} */
    MockOrderShippingMethod.prototype.rate_id;
    /** @type {?} */
    MockOrderShippingMethod.prototype.address_id;
    /** @type {?} */
    MockOrderShippingMethod.prototype.order_id;
    /** @type {?} */
    MockOrderShippingMethod.prototype.created_at;
    /** @type {?} */
    MockOrderShippingMethod.prototype.updated_at;
    /** @type {?} */
    MockOrderShippingMethod.prototype.carrier;
    /** @type {?} */
    MockOrderShippingMethod.prototype.carrier_title;
    /** @type {?} */
    MockOrderShippingMethod.prototype.code;
    /** @type {?} */
    MockOrderShippingMethod.prototype.method;
    /** @type {?} */
    MockOrderShippingMethod.prototype.method_description;
    /** @type {?} */
    MockOrderShippingMethod.prototype.price;
    /** @type {?} */
    MockOrderShippingMethod.prototype.error_message;
    /** @type {?} */
    MockOrderShippingMethod.prototype.method_title;
}
var DaffOrderShippingMethodFactory = /** @class */ (function (_super) {
    __extends$a(DaffOrderShippingMethodFactory, _super);
    function DaffOrderShippingMethodFactory() {
        return _super.call(this, MockOrderShippingMethod) || this;
    }
    DaffOrderShippingMethodFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffOrderShippingMethodFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffOrderShippingMethodFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffOrderShippingMethodFactory_Factory() { return new DaffOrderShippingMethodFactory(); }, token: DaffOrderShippingMethodFactory, providedIn: "root" });
    return DaffOrderShippingMethodFactory;
}(DaffModelFactory));

var __extends$b = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MockOrderTotal = /** @class */ (function () {
    function MockOrderTotal() {
        this.label = random.word();
        this.value = random.number({ min: 1, max: 100 });
        this.sort_order = random.number({ min: 1, max: 100 });
        this.type = DaffOrderTotalTypeEnum.GrandTotal;
    }
    return MockOrderTotal;
}());
if (false) {
    /** @type {?} */
    MockOrderTotal.prototype.label;
    /** @type {?} */
    MockOrderTotal.prototype.value;
    /** @type {?} */
    MockOrderTotal.prototype.sort_order;
    /** @type {?} */
    MockOrderTotal.prototype.type;
}
;
var DaffOrderTotalFactory = /** @class */ (function (_super) {
    __extends$b(DaffOrderTotalFactory, _super);
    function DaffOrderTotalFactory() {
        return _super.call(this, MockOrderTotal) || this;
    }
    DaffOrderTotalFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffOrderTotalFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffOrderTotalFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffOrderTotalFactory_Factory() { return new DaffOrderTotalFactory(); }, token: DaffOrderTotalFactory, providedIn: "root" });
    return DaffOrderTotalFactory;
}(DaffModelFactory));

var __extends$c = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MockOrder = /** @class */ (function () {
    function MockOrder() {
        this.id = random.number({ min: 1, max: 1000 });
        this.customer_id = random.number({ min: 1, max: 1000 });
        this.created_at = date.past().toString();
        this.updated_at = date.past().toString();
        this.status = random.word();
        this.totals = [];
        this.applied_codes = [];
        this.items = [];
        this.billing_addresses = [];
        this.shipping_addresses = [];
        this.shipments = [];
        this.payment = null;
        this.invoices = [];
        this.credits = [];
    }
    return MockOrder;
}());
if (false) {
    /** @type {?} */
    MockOrder.prototype.id;
    /** @type {?} */
    MockOrder.prototype.customer_id;
    /** @type {?} */
    MockOrder.prototype.created_at;
    /** @type {?} */
    MockOrder.prototype.updated_at;
    /** @type {?} */
    MockOrder.prototype.status;
    /** @type {?} */
    MockOrder.prototype.totals;
    /** @type {?} */
    MockOrder.prototype.applied_codes;
    /** @type {?} */
    MockOrder.prototype.items;
    /** @type {?} */
    MockOrder.prototype.billing_addresses;
    /** @type {?} */
    MockOrder.prototype.shipping_addresses;
    /** @type {?} */
    MockOrder.prototype.shipments;
    /** @type {?} */
    MockOrder.prototype.payment;
    /** @type {?} */
    MockOrder.prototype.invoices;
    /** @type {?} */
    MockOrder.prototype.credits;
}
;
var DaffOrderFactory = /** @class */ (function (_super) {
    __extends$c(DaffOrderFactory, _super);
    function DaffOrderFactory() {
        return _super.call(this, MockOrder) || this;
    }
    DaffOrderFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffOrderFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffOrderFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffOrderFactory_Factory() { return new DaffOrderFactory(); }, token: DaffOrderFactory, providedIn: "root" });
    return DaffOrderFactory;
}(DaffModelFactory));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A helper function to verify that a model is a Order.
 * @param {?} order
 * @return {?}
 */
function isOrder(order) {
    return !!order.id
        && !!order.customer_id
        && !!order.created_at
        && !!order.updated_at
        && !!order.status
        && !!order.applied_codes
        && !!order.totals;
}

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

export { DaffCompositeOrderItemFactory, DaffConfigurableOrderItemFactory, DaffOrderAddressFactory, DaffOrderCouponFactory, DaffOrderFactory, DaffOrderInvoiceFactory, DaffOrderItemFactory, DaffOrderPaymentFactory, DaffOrderShipmentFactory, DaffOrderShipmentItemFactory, DaffOrderShipmentTrackingFactory, DaffOrderShippingMethodFactory, DaffOrderTotalFactory, isOrder };
//# sourceMappingURL=daffodil-order-testing.js.map
