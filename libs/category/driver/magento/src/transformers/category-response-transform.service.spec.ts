import { TestBed } from '@angular/core/testing';

import {
  DaffCategory,
  DaffCategoryPageMetadata,
  DaffCategoryRequest,
} from '@daffodil/category';
import {
  DaffMagentoCategoryTransformerService,
  DaffMagentoCategoryPageConfigTransformerService,
  MagentoCompleteCategoryResponse,
  MagentoCategory,
  MagentoAggregation,
  MagentoPageInfo,
  MagentoSortFields,
} from '@daffodil/category/driver/magento';
import {
  DaffCategoryFactory,
  DaffCategoryPageMetadataFactory,
} from '@daffodil/category/testing';
import { DaffProduct } from '@daffodil/product';
import {
  MagentoProduct,
  transformManyMagentoProducts,
} from '@daffodil/product/driver/magento';
import { MagentoProductFactory } from '@daffodil/product/driver/magento/testing';
import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffMagentoCategoryResponseTransformService } from './category-response-transform.service';

xdescribe('DaffMagentoCategoryResponseTransformService', () => {

  let service: DaffMagentoCategoryResponseTransformService;
  const categoryFactory: DaffCategoryFactory = new DaffCategoryFactory();
  const stubCategory: DaffCategory = categoryFactory.create({
    id: '1',
  });
  const categoryPageMetadataFactory: DaffCategoryPageMetadataFactory = new DaffCategoryPageMetadataFactory();
  const stubCategoryPageMetadata: DaffCategoryPageMetadata = categoryPageMetadataFactory.create();
  const productFactory: DaffProductFactory = new DaffProductFactory();
  const stubProducts: DaffProduct[] = productFactory.createMany(4);

  const magentoCategoryTransformerServiceSpy = jasmine.createSpyObj('DaffMagentoCategoryTransformerService', ['transform']);
  const magentoCategoryPageConfigurationTransformerServiceSpy = jasmine.createSpyObj('DaffMagentoCategoryPageConfigTransformerService', ['transform']);
  const magentoProductTransformerServiceSpy = jasmine.createSpyObj('DaffProductTransformerInterface', ['transformMany']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoCategoryResponseTransformService,
        { provide: DaffMagentoCategoryTransformerService, useValue: magentoCategoryTransformerServiceSpy },
        { provide: DaffMagentoCategoryPageConfigTransformerService, useValue: magentoCategoryPageConfigurationTransformerServiceSpy },
      ],
    });
    service = TestBed.inject(DaffMagentoCategoryResponseTransformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform', () => {

    let completeCategory: MagentoCompleteCategoryResponse;

    beforeEach(() => {
      magentoCategoryTransformerServiceSpy.transform.and.returnValue(stubCategory);
      magentoCategoryPageConfigurationTransformerServiceSpy.transform.and.returnValue(stubCategoryPageMetadata);
      magentoProductTransformerServiceSpy.transformMany.and.returnValue(stubProducts);

      const category: MagentoCategory = {
        id: Number(stubCategory.id),
        name: stubCategory.name,
        breadcrumbs: [{
          category_id: Number(stubCategory.breadcrumbs[0].categoryId),
          category_name: stubCategory.breadcrumbs[0].categoryName,
          category_level: stubCategory.breadcrumbs[0].categoryLevel,
          category_url_key: stubCategory.breadcrumbs[0].categoryUrlKey,
        }],
        children_count: stubCategory.children_count,
      };
      const aggregates: MagentoAggregation[] = [{
        attribute_code: stubCategoryPageMetadata.filters[0].name,
        label: stubCategoryPageMetadata.filters[0].label,
      }];

      const page_info: MagentoPageInfo = {
        page_size: stubCategoryPageMetadata.page_size,
        current_page: stubCategoryPageMetadata.current_page,
        total_pages: stubCategoryPageMetadata.total_pages,
      };

      const sort_fields: MagentoSortFields = {
        default: stubCategoryPageMetadata.sort_options.options[0].value,
        options: stubCategoryPageMetadata.sort_options.options,
      };

      const products: MagentoProduct[] = new MagentoProductFactory().createMany(1);

      completeCategory = {
        category,
        aggregates,
        page_info,
        sort_fields,
        products,
        total_count: products.length,
      };
    });

    it('should call transform on the magentoCategoryTransformerService', () => {
      service.transform(completeCategory);

      expect(magentoCategoryTransformerServiceSpy.transform).toHaveBeenCalledWith(completeCategory.category);
    });

    it('should call transform on the magentoCategoryPageConfigurationService', () => {
      service.transform(completeCategory);

      expect(magentoCategoryPageConfigurationTransformerServiceSpy.transform).toHaveBeenCalledWith(completeCategory);
    });

    it('should return the same number of products it receives', () => {
      expect(service.transform(completeCategory).products.length).toEqual(completeCategory.products.length);
    });

    it('should return a DaffGetCategoryResponse', () => {
      expect(service.transform(completeCategory)).toEqual(
        {
          ...{ magentoCompleteCategoryResponse: completeCategory },
          category: stubCategory,
          products: transformManyMagentoProducts(completeCategory.products),
          categoryPageMetadata: stubCategoryPageMetadata,
        },
      );
    });

    it('should return the magento MagentoCompleteCategoryResponse on the daffodil response', () => {
      expect((<any>service.transform(completeCategory)).magentoCompleteCategoryResponse).toEqual(completeCategory);
    });
  });
});
