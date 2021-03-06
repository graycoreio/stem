import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  DaffStoreFacade,
  DaffStateError,
} from '@daffodil/core/state';
import { DaffPaypalTokenResponse } from '@daffodil/paypal';

export interface DaffPaypalFacadeInterface<T extends DaffPaypalTokenResponse = DaffPaypalTokenResponse> extends DaffStoreFacade<Action> {
  loading$: Observable<boolean>;
	paypalTokenResponse$: Observable<T>;
	paypalToken$: Observable<string>;
	paypalStartUrl$: Observable<string>;
	paypalEditUrl$: Observable<string>;
  error$: Observable<DaffStateError>;
}
