import { Injectable } from '@angular/core';
import {
  Store,
  select,
  Action,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffSortDirectionEnum } from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';

import { DaffCategoryModule } from '../category.module';
import { DaffCategory } from '../models/category';
import { DaffCategoryAppliedFilter } from '../models/category-applied-filter';
import { DaffCategoryFilter } from '../models/category-filter';
import { DaffCategoryPageConfigurationState } from '../models/category-page-configuration-state';
import { DaffCategorySortOption } from '../models/category-sort-option';
import { DaffGenericCategory } from '../models/generic-category';

import {
  DaffCategoryRequest,
} from '../models/requests/category-request';
import { DaffCategoryReducersState } from '../reducers/category-reducers.interface';
import { getDaffCategorySelectors } from '../selectors/category.selector';
import { DaffCategoryFacadeInterface } from './category-facade.interface';

/**
 * A facade for accessing state for the currently selected category.
 */
@Injectable({
  providedIn: DaffCategoryModule,
})
export class DaffCategoryFacade<
	T extends DaffCategoryRequest = DaffCategoryRequest,
	V extends DaffGenericCategory<V> = DaffCategory,
	U extends DaffCategoryPageConfigurationState<T> = DaffCategoryPageConfigurationState<T>,
	W extends DaffProduct = DaffProduct
> implements DaffCategoryFacadeInterface<T, V, U, W> {
	private categorySelectors = getDaffCategorySelectors<T, V, U, W>();

	/**
	 * The currently selected category.
	 */
  category$: Observable<V>;
  /**
   * The page configuration state for the selected category.
   */
  pageConfigurationState$: Observable<U>;
  /**
   * The current page of products for the selected category.
   */
  currentPage$: Observable<number>;
  /**
   * The number of pages of product for the selected category.
   */
	totalPages$: Observable<number>;
	/**
	 * The total number of products for the filters applied.
	 */
	totalProducts$: Observable<number>;
  /**
   * The number of products per page for the selected category.
   */
  pageSize$: Observable<number>;
  /**
   * The filters available for the products of the selected category.
   */
  filters$: Observable<DaffCategoryFilter[]>;
  /**
   * The sort options available for the products of the selected category.
   */
  sortOptions$: Observable<DaffCategorySortOption[]>;
  /**
   * The sort options available for the products of the selected category.
   */
  appliedFilters$: Observable<DaffCategoryAppliedFilter[]>;
  /**
   * The sort options available for the products of the selected category.
   */
  appliedSortOption$: Observable<string>;
  /**
   * The sort options available for the products of the selected category.
   */
  appliedSortDirection$: Observable<DaffSortDirectionEnum>;
  /**
   * Products of the currently selected category.
   */
  products$: Observable<W[]>;
  /**
   * The loading state for retrieving a single category.
   */
  categoryLoading$: Observable<boolean>;
  /**
   * The loading state for retrieving only the products of the category.
   */
  productsLoading$: Observable<boolean>;
  /**
   * Errors associated with retrieving a single category.
   */
	errors$: Observable<string[]>;
	/**
	 * Is the category page empty of products.
	 */
	isCategoryEmpty$: Observable<boolean>;

	/**
	 * Get a category by the provided Id.
	 *
	 * @param id
	 */
	getCategoryById(id: V['id']): Observable<V> {
	  return this.store.pipe(select(this.categorySelectors.selectCategory, { id }));
	}

	/**
	 * Get products by a category Id.
	 *
	 * @param categoryId
	 */
	getProductsByCategory(categoryId: V['id']): Observable<W[]> {
	  return this.store.pipe(select(this.categorySelectors.selectProductsByCategory, { id: categoryId }));
	}

	/**
	 * Get products by a category Id.
	 *
	 * @param categoryId
	 */
	getTotalProductsByCategory(categoryId: V['id']): Observable<number> {
	  return this.store.pipe(select(this.categorySelectors.selectTotalProductsByCategory, { id: categoryId }));
	}

	constructor(private store: Store<DaffCategoryReducersState<T, V, U>>) {
	  this.category$ = this.store.pipe(select(this.categorySelectors.selectSelectedCategory));
	  this.products$ = this.store.pipe(select(this.categorySelectors.selectCategoryPageProducts));
	  this.totalProducts$ = this.store.pipe(select(this.categorySelectors.selectCategoryPageTotalProducts));
	  this.pageConfigurationState$ = this.store.pipe(select(this.categorySelectors.selectCategoryPageConfigurationState));
	  this.currentPage$ = this.store.pipe(select(this.categorySelectors.selectCategoryCurrentPage));
	  this.totalPages$ = this.store.pipe(select(this.categorySelectors.selectCategoryTotalPages));
	  this.pageSize$ = this.store.pipe(select(this.categorySelectors.selectCategoryPageSize));
	  this.filters$ = this.store.pipe(select(this.categorySelectors.selectCategoryFilters));
	  this.sortOptions$ = this.store.pipe(select(this.categorySelectors.selectCategorySortOptions));
	  this.appliedFilters$ = this.store.pipe(select(this.categorySelectors.selectCategoryPageAppliedFilters));
	  this.appliedSortOption$ = this.store.pipe(select(this.categorySelectors.selectCategoryPageAppliedSortOption));
	  this.appliedSortDirection$ = this.store.pipe(select(this.categorySelectors.selectCategoryPageAppliedSortDirection));
	  this.categoryLoading$ = this.store.pipe(select(this.categorySelectors.selectCategoryLoading));
	  this.productsLoading$ = this.store.pipe(select(this.categorySelectors.selectCategoryProductsLoading));
	  this.errors$ = this.store.pipe(select(this.categorySelectors.selectCategoryErrors));
	  this.isCategoryEmpty$ = this.store.pipe(select(this.categorySelectors.selectIsCategoryPageEmpty));
	}

	/**
	 * Dispatches the given action.
	 *
	 * @param action action to dispatch.
	 */
	dispatch(action: Action) {
	  this.store.dispatch(action);
	}
}
