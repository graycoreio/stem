import { Inject, Injectable } from '@angular/core';
import { of, EMPTY } from 'rxjs';

import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { mergeMap, switchMap, map, catchError, tap, delay } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

import { DaffNewsletterServiceInterface } from '../driver/interfaces/newsletter-service.interface';
import { DaffNewsletterActionTypes, DaffNewsletterSubscribe, DaffNewsletterSuccessSubscribe, DaffNewsletterFailedSubscribe, DaffNewsletterRetry, DaffNewsletterCancel } from '../actions/newsletter.actions';
import { DaffNewsletterSubmission } from '../models/newsletter.model';
import { DaffNewsletterDriver } from '../driver/injection-tokens/newsletter-driver.token';
import { filter } from 'graphql-anywhere';

@Injectable()
export class DaffNewsletterEffects<T extends DaffNewsletterSubmission, V>{

  constructor(
    private actions$: Actions,
    @Inject(DaffNewsletterDriver) private driver: DaffNewsletterServiceInterface<T, V>) { }

  trySubmission$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(DaffNewsletterActionTypes.NewsletterSubscribeAction,
      DaffNewsletterActionTypes.NewsletterRetry,
      DaffNewsletterActionTypes.NewsletterCancelAction),
    switchMap((action: DaffNewsletterSubscribe<T> | DaffNewsletterRetry<T> | DaffNewsletterCancel) => {
      if ((action.type === DaffNewsletterActionTypes.NewsletterCancelAction)) {
        console.log(action);
        return of(action);
      }
      else if (action instanceof DaffNewsletterSubscribe || action instanceof DaffNewsletterRetry){
        console.log(action);
        return this.driver.send(action.payload).pipe(
          map((resp: V) => {
            return new DaffNewsletterSuccessSubscribe();
          }),
          catchError(error => {
            return of(new DaffNewsletterFailedSubscribe('Failed to subscribe to newsletter'));
          })
        )
      }
    }),
    ofType(DaffNewsletterActionTypes.NewsletterFailedSubscribeAction, DaffNewsletterActionTypes.NewsletterSuccessSubscribeAction)
  ));
}