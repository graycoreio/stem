import { TestBed } from '@angular/core/testing';

import { DaffCategoryFactory } from '@daffodil/category/testing';

import { DaffMagentoCategoryTransformerService } from './category-transformer.service';
import { DaffCategory } from '../../../models/inputs/category';
import { MagentoCategory } from '../models/inputs/category/category';

describe('DaffMagentoCategoryTransformerService', () => {

  let service: DaffMagentoCategoryTransformerService;
  const categoryFactory: DaffCategoryFactory = new DaffCategoryFactory();
	const stubCategory: DaffCategory = categoryFactory.create();
	//todo category should have its own product ids.
	delete stubCategory.productIds;
	delete stubCategory.total_products;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoCategoryTransformerService
      ]
    });
    service = TestBed.get(DaffMagentoCategoryTransformerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform', () => {
    
    it('should return a DaffCategory', () => {
      const magentoCategory: MagentoCategory = {
        id: stubCategory.id,
        name: stubCategory.name,
        breadcrumbs: [{
          category_id: stubCategory.breadcrumbs[0].categoryId,
          category_name: stubCategory.breadcrumbs[0].categoryName,
          category_level: stubCategory.breadcrumbs[0].categoryLevel,
          category_url_key: stubCategory.breadcrumbs[0].categoryUrlKey
        }],
        children_count: stubCategory.children_count
      }

      expect(service.transform(magentoCategory)).toEqual(stubCategory);
    });
  });
});
