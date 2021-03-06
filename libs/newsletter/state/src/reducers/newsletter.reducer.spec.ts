import { DaffNewsletterSubmission } from '@daffodil/newsletter';
import {
  DaffNewsletterSubscribe,
  DaffNewsletterRetry,
  DaffNewsletterCancel,
  DaffNewsletterFailedSubscribe,
  DaffNewsletterSuccessSubscribe,
  DaffNewsletterReset,
  DaffNewsletterState,
} from '@daffodil/newsletter/state';

import { reducer } from './newsletter.reducer';


describe('the newsletter reducer', () => {
  it('should create an initial state', () => {
    const expectedInitialState: DaffNewsletterState = {
      error: null,
      loading: false,
      success: false,
    };
    const action = <any>{};
    expect(reducer(undefined, action)).toEqual(expectedInitialState);
  });

  it('should start loading when a subscription attempt occurs', () =>{
    const payload: DaffNewsletterSubmission = { email: 'yes@gmail.com' };
    const action = new DaffNewsletterSubscribe(payload);
    const expectedState = {
      error: null,
      loading: true,
      success: false,
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should start loading when a retry occurs', () =>{
    const payload: DaffNewsletterSubmission = { email: 'yes@gmail.com' };
    const action = new DaffNewsletterRetry(payload);
    const expectedState = {
      error: null,
      loading: true,
      success: false,
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should cancel loading the newsletter', () => {
    const action = new DaffNewsletterCancel();
    const loadingState = {
      error: null,
      loading: true,
      success: false,
    };
    const expectedState = {
      error: null,
      loading: false,
      success: false,
    };
    expect(reducer(loadingState, action)).toEqual(expectedState);
  });

  it('should cancel loading and have an error message if the subscribe fails', () =>{
    const error = { code: 'code', message: 'Failed to subscribe to newsletter' };
    const action = new DaffNewsletterFailedSubscribe(error);
    const failedState = {
      error: null,
      loading: true,
      success: false,
    };
    const expectedState = {
      error,
      loading: false,
      success: false,
    };
    expect(reducer(failedState, action)).toEqual(expectedState);
  });

  it('should set success to true after a successful subscription', () =>{
    const action = new DaffNewsletterSuccessSubscribe();
    const preSuccessState = {
      error: null,
      loading: true,
      success: false,
    };
    const expectedState = {
      error: null,
      loading: false,
      success: true,
    };
    expect(reducer(preSuccessState, action)).toEqual(expectedState);
  });

  it('should return to the intialState when reset', () => {
    const action = new DaffNewsletterReset();
    const successState = {
      error: null,
      loading: false,
      success: true,
    };
    expect(reducer(successState, action)).toEqual(reducer(undefined,<any>{}));
  });
});
