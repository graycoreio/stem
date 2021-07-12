import { TestBed } from '@angular/core/testing';

import { DaffProductDriverResponse } from '@daffodil/product/driver';
import { MagentoProduct } from '@daffodil/product/driver/magento';
import { MagentoProductFactory } from '@daffodil/product/driver/magento/testing';

import { DaffMagentoProductResponseTransformers } from './product-response';

describe('@daffodil/product/driver/magento | transformMagentoProductResponse', () => {
  let stubMagentoProduct: MagentoProduct;
  let productFactory: MagentoProductFactory;
  const mediaUrl = 'media url';
  let result: DaffProductDriverResponse;
  let service: DaffMagentoProductResponseTransformers;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoProductResponseTransformers,
      ],
    });

    service = TestBed.inject(DaffMagentoProductResponseTransformers);
    productFactory = TestBed.inject(MagentoProductFactory);

    stubMagentoProduct = productFactory.create({
      related_products: productFactory.createMany(1),
      upsell_products: productFactory.createMany(1),
    });

    result = service.transformMagentoProductResponse(stubMagentoProduct, mediaUrl);
  });

  it('should set the ID to the main product ID', () => {
    expect(result.id).toEqual(stubMagentoProduct.sku);
  });

  it('should add the transformed product to the products array', () => {
    expect(result.products).toContain(jasmine.objectContaining({ id: stubMagentoProduct.sku }));
  });

  it('should add the upsell products to the products array', () => {
    expect(result.products).toContain(jasmine.objectContaining({ id: stubMagentoProduct.upsell_products[0].sku }));
  });

  it('should add the related products to the products array', () => {
    expect(result.products).toContain(jasmine.objectContaining({ id: stubMagentoProduct.related_products[0].sku }));
  });
});
