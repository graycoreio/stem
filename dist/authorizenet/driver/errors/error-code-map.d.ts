import { DaffAuthorizeNetAcceptjsInvalidError } from './acceptjs_invalid';
import { DaffAuthorizeNetAcceptjsMissingError } from './acceptjs_missing';
import { DaffAuthorizeNetAuthFailedError } from './auth-failed';
import { DaffAuthorizeNetInputMissingError } from './input-missing';
import { DaffAuthorizeNetInsecureConnectionError } from './insecure-connection';
import { DaffAuthorizeNetInvalidCCCVVError } from './invalid-cc-cvv';
import { DaffAuthorizeNetInvalidCCExpMonthError } from './invalid-cc-exp-month';
import { DaffAuthorizeNetInvalidCCExpYearError } from './invalid-cc-exp-year';
import { DaffAuthorizeNetInvalidCCNameError } from './invalid-cc-name';
import { DaffAuthorizeNetInvalidClientKeyError } from './invalid-client-key';
import { DaffAuthorizeNetInvalidLoginIdError } from './invalid-login-id';
import { DaffAuthorizeNetInvalidPostalCodeError } from './invalid-postal-code';
import { DaffAuthorizeNetPastCCExpirationError } from './past-cc-expiration';
export declare const DAFF_AUTHORIZE_NET_ERROR_CODE_MAP: {
    E_WC_01: typeof DaffAuthorizeNetAcceptjsMissingError;
    E_WC_02: typeof DaffAuthorizeNetInsecureConnectionError;
    E_WC_03: typeof DaffAuthorizeNetAcceptjsInvalidError;
    E_WC_04: typeof DaffAuthorizeNetInputMissingError;
    E_WC_05: typeof DaffAuthorizeNetInvalidCCNameError;
    E_WC_06: typeof DaffAuthorizeNetInvalidCCExpMonthError;
    E_WC_07: typeof DaffAuthorizeNetInvalidCCExpYearError;
    E_WC_08: typeof DaffAuthorizeNetPastCCExpirationError;
    E_WC_10: typeof DaffAuthorizeNetInvalidLoginIdError;
    E_WC_13: typeof DaffAuthorizeNetAcceptjsInvalidError;
    E_WC_15: typeof DaffAuthorizeNetInvalidCCCVVError;
    E_WC_16: typeof DaffAuthorizeNetInvalidPostalCodeError;
    E_WC_17: typeof DaffAuthorizeNetInvalidCCNameError;
    E_WC_18: typeof DaffAuthorizeNetInvalidClientKeyError;
    E_WC_19: typeof DaffAuthorizeNetInvalidLoginIdError;
    E_WC_21: typeof DaffAuthorizeNetAuthFailedError;
    E_WC_23: typeof DaffAuthorizeNetInputMissingError;
};
