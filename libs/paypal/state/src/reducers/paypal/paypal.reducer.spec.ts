import { DaffStateError } from '@daffodil/core/state';
import {
  DaffPaypalTokenResponse,
  DaffPaypalTokenRequest,
} from '@daffodil/paypal';
import {
  DaffPaypalReducerState,
  DaffGeneratePaypalExpressToken,
  DaffGeneratePaypalExpressTokenSuccess,
  DaffGeneratePaypalExpressTokenFailure,
} from '@daffodil/paypal/state';
import { DaffPaypalTokenResponseFactory } from '@daffodil/paypal/testing';

import { daffPaypalReducer } from './paypal.reducer';

describe('Paypal | Paypal Reducer', () => {

  let paypalTokenResponseFactory: DaffPaypalTokenResponseFactory;
  let paypalTokenResponse: DaffPaypalTokenResponse;
  let paypalRequest: DaffPaypalTokenRequest;
  const initialState: DaffPaypalReducerState = {
    paypalTokenResponse: null,
    loading: false,
    error: null,
  };

  beforeEach(() => {
    paypalTokenResponseFactory = new DaffPaypalTokenResponseFactory();

    paypalTokenResponse = paypalTokenResponseFactory.create();
    paypalRequest = {
      cartId: 'cartId',
    };
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = <any>{};

      const result = daffPaypalReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when a GeneratePaypalExpressTokenAction is triggered', () => {
    let result;

    beforeEach(() => {
      const generatePaypalExpressTokenAction = new DaffGeneratePaypalExpressToken(paypalRequest);

      result = daffPaypalReducer(initialState, generatePaypalExpressTokenAction);
    });

    it('sets loading state to true', () => {
      expect(result.loading).toEqual(true);
    });
  });

  describe('when a GeneratePaypalExpressTokenSuccessAction is triggered', () => {

    let result: DaffPaypalReducerState<DaffPaypalTokenResponse>;
    let state: DaffPaypalReducerState<DaffPaypalTokenResponse>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
      };

      const generatePaypalExpressTokenSuccessAction = new DaffGeneratePaypalExpressTokenSuccess(paypalTokenResponse);
      result = daffPaypalReducer(state, generatePaypalExpressTokenSuccessAction);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('sets paypalTokenResponse to the payload', () => {
      expect(result.paypalTokenResponse).toEqual(paypalTokenResponse);
    });

    it('sets error to null', () => {
      expect(result.error).toBeNull();
    });
  });

  describe('when GeneratePaypalExpressTokenFailureAction is triggered', () => {

    const error: DaffStateError = { code: 'code', message: 'error message' };
    let result: DaffPaypalReducerState<DaffPaypalTokenResponse>;
    let state: DaffPaypalReducerState<DaffPaypalTokenResponse>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        error: { code: 'firstErrorCode', message: 'firstErrorMessage' },
      };

      const generatePaypalExpressTokenFailureAction = new DaffGeneratePaypalExpressTokenFailure(error);

      result = daffPaypalReducer(state, generatePaypalExpressTokenFailureAction);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('sets paypalTokenResponse to the null', () => {
      expect(result.paypalTokenResponse).toBeNull();
    });

    it('sets the error', () => {
      expect(result.error).toEqual(error);
    });
  });
});
