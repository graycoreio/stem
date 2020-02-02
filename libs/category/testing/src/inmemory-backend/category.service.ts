import { Injectable } from '@angular/core';
import {
  InMemoryDbService,
  RequestInfoUtilities,
  ParsedRequestUrl,
  STATUS
} from 'angular-in-memory-web-api';

import { DaffCategory, DaffCategoryPageConfigurationState } from '@daffodil/category';
import { DaffInMemoryBackendProductService } from '@daffodil/product/testing';

import { DaffCategoryFactory } from '../factories/category.factory';
import { DaffCategoryPageConfigurationStateFactory } from '../factories/category-page-configuration-state.factory';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryBackendCategoryService implements InMemoryDbService {
  category: DaffCategory;
  categoryPageConfigurationState: DaffCategoryPageConfigurationState;

  constructor(
    private categoryFactory: DaffCategoryFactory,
    private categoryPageConfigurationFactory: DaffCategoryPageConfigurationStateFactory,
    private productInMemoryBackendService: DaffInMemoryBackendProductService
  ) {}

  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    return utils.parseRequestUrl(url);
  }

  createDb(): any {
    return {};
  }

  get(reqInfo: any) {
		this.category = this.categoryFactory.create({
			id: reqInfo.id,
			total_products: this.generatePageSize(reqInfo),
			page_size: this.generatePageSize(reqInfo),
			productIds: this.productInMemoryBackendService.products
				.map(product => product.id)
				.slice(0, this.generatePageSize(reqInfo))
		});

    this.categoryPageConfigurationState = this.categoryPageConfigurationFactory.create({
			id: reqInfo.id,
			page_size: this.generatePageSize(reqInfo),
			current_page: this.getCurrentPageParam(reqInfo)
		});

    return reqInfo.utils.createResponse$(() => {
      return {
        body: {
          category: this.category,
          categoryPageConfigurationState: this.categoryPageConfigurationState,
          products: this.productInMemoryBackendService.products
        },
        status: STATUS.OK
      };
    });
	}

	private generatePageSize(reqInfo) {
		if(reqInfo.req.params.map && reqInfo.req.params.map.get('page_size') && reqInfo.req.params.map.get('page_size')[0]) {
			return parseInt(reqInfo.req.params.map.get('page_size')[0], 10);
		}
		return Math.floor(Math.random() * 8 + 1);
	}

	private getCurrentPageParam(reqInfo) {
		if(reqInfo.req.params.map && reqInfo.req.params.map.get('current_page')) {
			return parseInt(reqInfo.req.params.map.get('current_page')[0], 10);
		}
		return 1;
	}
}
