import { TestBed } from '@angular/core/testing';

import { DaffNavigationTree } from '@daffodil/navigation';
import { CategoryNode } from '@daffodil/navigation/driver/magento';

import { DaffMagentoNavigationTransformerService } from './navigation-transformer';

describe('Driver | Magento | Navigation | Transformers | DaffMagentoNavigationTransformerService', () => {
  let service: DaffMagentoNavigationTransformerService;
  let categoryNode: CategoryNode;
  let expectedNavigation: DaffNavigationTree;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoNavigationTransformerService,
      ],
    });
    service = TestBed.inject(DaffMagentoNavigationTransformerService);

    categoryNode = {
      uid: '1',
      url_path: '1',
      url_suffix: '.html',
      name: 'Root Category',
      include_in_menu: true,
      product_count: 10,
      position: 1,
      children_count: 0,
      children: [
        {
          uid: '2',
          url_path: '2',
          url_suffix: '.html',
          include_in_menu: true,
          name: 'Subcategory',
          product_count: 10,
          children_count: 0,
          children: [],
          position: 2,
          breadcrumbs: [
            {
              category_uid: '2',
              category_level: 2,
              category_name: 'name2',
              category_url_key: 'url2',
            },
            {
              category_uid: '1',
              category_level: 1,
              category_name: 'name',
              category_url_key: 'url',
            },
          ],
        },
        {
          uid: '3',
          url_path: '3',
          url_suffix: '.html',
          include_in_menu: false,
          name: 'Subcategory',
          product_count: 10,
          children_count: 0,
          position: null,
          children: [],
          breadcrumbs: [],
        },
        {
          uid: '5',
          url_path: '5',
          url_suffix: '.html',
          include_in_menu: true,
          name: 'Subcategory',
          product_count: 10,
          children_count: 0,
          children: [],
          position: 1,
          breadcrumbs: [],
        },
      ],
      breadcrumbs: [],
    };

    expectedNavigation = {
      id: '1',
      url: '1.html',
      name: 'Root Category',
      path: '1',
      total_products: 10,
      children: [
        {
          id: '5',
          url: '5.html',
          name: 'Subcategory',
          path: '5',
          total_products: 10,
          children: [],
          children_count: 0,
          breadcrumbs: [],
        },
        {
          id: '2',
          url: '2.html',
          name: 'Subcategory',
          path: '2',
          total_products: 10,
          children: [],
          children_count: 0,
          breadcrumbs: [
            {
              categoryId: '1',
              categoryLevel: 1,
              categoryName: 'name',
              categoryUrlKey: 'url',
            },
            {
              categoryId: '2',
              categoryLevel: 2,
              categoryName: 'name2',
              categoryUrlKey: 'url2',
            },
          ],
        },
      ],
      children_count: 0,
      breadcrumbs: [],
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should transform a CategoryNode into a DaffNavigationTree', () => {
    expect(service.transform(categoryNode)).toEqual(expectedNavigation);
  });

  it('should filter out categories (and necessarily their children) that are include_in_menu false', () => {
    expect(service.transform(categoryNode).children.length).not.toEqual(categoryNode.children.length);
  });

  it('should order the categories by position', () => {
    const categoryResult = service.transform(categoryNode);
    expect(categoryResult.children[0].id).toEqual(categoryNode.children[2].uid.toString());
    expect(categoryResult.children[1].id).toEqual(categoryNode.children[0].uid.toString());
  });

  it('should order the breadcrumbs by level', () => {
    const breadcrumbsResult = service.transform(categoryNode).children[1].breadcrumbs;
    expect(breadcrumbsResult[0].categoryLevel).toBeLessThan(breadcrumbsResult[1].categoryLevel);
  });

  it('should set children to an empty array when magento returns a null children array', () => {
    categoryNode.children = null;
    const categoryResult = service.transform(categoryNode);

    expect(categoryResult.children).toEqual([]);
  });
});
