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
  DaffExternalRouterMagentoDriverConfig,
  DAFF_EXTERNAL_ROUTER_DRIVER_MAGENTO_CONFIG,
} from './config';
import { MagentoResolveUrlv241 } from './graphql/queries/resolve-url-v2.4.1';
import { MagentoResolveUrlv242 } from './graphql/queries/resolve-url-v2.4.2';
import { MagentoUrlResolver } from './model/magento-url-resolver';
import { transformResolutionToResolvableUrl } from './transforms/resolution-to-resolvable-url';

/**
 * The DaffExternalRouterMagentoDriver is responsible for translating an
 * arbitrary URI into a DaffExternallyResolvableUrl with Magento environments.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffExternalRouterMagentoDriver
implements DaffExternalRouterDriverInterface {
  constructor(
		@Inject(DAFF_EXTERNAL_ROUTER_DRIVER_MAGENTO_CONFIG)
		private config: DaffExternalRouterMagentoDriverConfig,
		private apollo: Apollo,
  ) {}

  resolve(url: string): Observable<DaffExternallyResolvableUrl> {
    return this.apollo
      .query<MagentoUrlResolver>({
        query:
					this.config.version === '2.4.1'
					  ? MagentoResolveUrlv241
					  : MagentoResolveUrlv242,
        variables: {
          url,
        },
      })
      .pipe(map(response => {
        console.log(response);
        return transformResolutionToResolvableUrl(response.data.urlResolver);
      }));
  }
}
