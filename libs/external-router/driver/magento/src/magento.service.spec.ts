import { TestBed } from '@angular/core/testing';
import {
  ApolloTestingController,
  ApolloTestingModule,
} from 'apollo-angular/testing';
import { TestScheduler } from 'rxjs/testing';

import { DaffExternallyResolvableUrl } from '@daffodil/external-router';
import {
  MagentoResolution,
  MagentoUrlRewriteEntityTypeEnum,
} from '@daffodil/external-router/driver/magento';

import { MagentoResolveUrlv241 } from './graphql/queries/resolve-url-v2.4.1';
import { MagentoResolveUrlv242 } from './graphql/queries/resolve-url-v2.4.2';
import { DaffExternalRouterDriverMagentoModule } from './magento.module';
import { DaffExternalRouterMagentoDriver } from './magento.service';
import { MagentoUrlResolver } from './model/magento-url-resolver';

describe('@daffodil/external-router/driver/magento | DaffExternalRouterMagentoDriver', () => {
  let service: DaffExternalRouterMagentoDriver;
  let controller: ApolloTestingController;
  let scheduler: TestScheduler;
  let url: string;
  let resolution: MagentoUrlResolver;
  let resolvableUrl: DaffExternallyResolvableUrl;

  const setupTest = (version: string) => {
    TestBed.configureTestingModule({
      imports: [
        DaffExternalRouterDriverMagentoModule.forRoot({
          version,
        }),
        ApolloTestingModule,
      ],
    });
    service = TestBed.inject(DaffExternalRouterMagentoDriver);
    controller = TestBed.inject(ApolloTestingController);

    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

    url = 'url';
    resolution = {
      urlResolver: {
        relative_url: url,
        type: MagentoUrlRewriteEntityTypeEnum.PRODUCT,
        redirectCode: 0,
        entity_uid: '',
      },
    };

    resolvableUrl = {
      url,
      type: MagentoUrlRewriteEntityTypeEnum.PRODUCT,
    };
  };

  it('should be created', () => {
    setupTest('2.4.2');
    expect(service).toBeTruthy();
  });

  describe('resolve', () => {
    it('should return a resolvable url when using v2.4.1', done => {
      setupTest('2.4.1');

      service.resolve(url).subscribe(result => {
        expect(result.url).toEqual(url);
        expect(result.type).toEqual(MagentoUrlRewriteEntityTypeEnum.PRODUCT);
        done();
      });

      const op = controller.expectOne(MagentoResolveUrlv241);

      op.flush({
        data: resolution,
      });
    });

    it('should return a resolvable url when using the v2.4.2', done => {
      setupTest('2.4.2');

      service.resolve(url).subscribe(result => {
        console.log(result);
        expect(result.url).toEqual(url);
        expect(result.type).toEqual(MagentoUrlRewriteEntityTypeEnum.PRODUCT);
        done();
      });

      const op = controller.expectOne(MagentoResolveUrlv242);

      op.flush({
        data: resolution,
      });
    });
  });
});
