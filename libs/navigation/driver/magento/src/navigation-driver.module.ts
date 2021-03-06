import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DAFF_MAGENTO_CACHEABLE_OPERATIONS } from '@daffodil/driver/magento';
import {
  DaffNavigationDriver,
  DaffNavigationTransformer,
} from '@daffodil/navigation/driver';

import {
  MagentoNavigationDriverConfiguration,
  MAGENTO_NAVIGATION_TREE_QUERY_DEPTH,
} from './interfaces/navigation-config.interface';
import { DaffMagentoNavigationService } from './navigation.service';
import { DAFF_MAGENTO_GET_CATEGORY_TREE_QUERY_NAME } from './queries/get-category-tree';
import { DaffMagentoNavigationTransformerService } from './transformers/navigation-transformer';

export const MAGENTO_NAVIGATION_DEFAULT_CONFIGURATION: MagentoNavigationDriverConfiguration = {
  navigationTreeQueryDepth: 3,
};

@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffNavigationMagentoDriverModule {
  static forRoot(config: MagentoNavigationDriverConfiguration = MAGENTO_NAVIGATION_DEFAULT_CONFIGURATION): ModuleWithProviders<DaffNavigationMagentoDriverModule> {
    return {
      ngModule: DaffNavigationMagentoDriverModule,
      providers: [
        {
          provide: DaffNavigationDriver,
          useExisting: DaffMagentoNavigationService,
        },
        {
          provide: DaffNavigationTransformer,
          useExisting: DaffMagentoNavigationTransformerService,
        },
        {
          provide: MAGENTO_NAVIGATION_TREE_QUERY_DEPTH,
          useValue: config.navigationTreeQueryDepth,
        },
        {
          provide: DAFF_MAGENTO_CACHEABLE_OPERATIONS,
          useValue: DAFF_MAGENTO_GET_CATEGORY_TREE_QUERY_NAME,
          multi: true,
        },
      ],
    };
  }
}
