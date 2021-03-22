import {
  Injectable,
  Inject,
} from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffExternallyResolvableUrl } from '@daffodil/external-router';
import { DaffExternalRouterDriverInterface } from '@daffodil/external-router/driver';
import {
  transformResolutionToResolvableUrl,
  MagentoUrlResolverResponse,
} from '@daffodil/external-router/driver/magento';

import { MagentoResolveUrlv241 } from './graphql/queries/resolve-url-v2.4.1';

/**
 * The DaffExternalRouterMagentoDriver is responsible for translating an
 * arbitrary URI into a DaffExternallyResolvableUrl with Magento environments.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffExternalRouterMagentoDriver
implements DaffExternalRouterDriverInterface {
  constructor(private apollo: Apollo) {}

  resolve(url: string): Observable<DaffExternallyResolvableUrl> {
    return this.apollo
      .query<MagentoUrlResolverResponse>({
        query: MagentoResolveUrlv241,
        variables: {
          url,
        },
      })
      .pipe(map(response => transformResolutionToResolvableUrl(response.data.urlResolver)));
  }
}