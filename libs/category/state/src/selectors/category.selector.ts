import { Dictionary } from '@ngrx/entity';
import {
  createSelector,
  MemoizedSelector,
  MemoizedSelectorWithProps,
} from '@ngrx/store';

import {
  DaffCategoryRequest,
  DaffGenericCategory,
  DaffCategory,
  DaffCategoryPageConfigurationState,
} from '@daffodil/category';
import { DaffProduct } from '@daffodil/product';
import { getDaffProductSelectors } from '@daffodil/product/state';

import { DaffCategoryEntitiesMemoizedSelectors } from './category-entities/category-entities.selector';
import { getDaffCategoryEntitiesSelectors } from './category-entities/category-entities.selector';
import {
  DaffCategoryFeatureMemoizedSelectors,
  getDaffCategoryFeatureSelector,
} from './category-feature.selector';
import {
  DaffCategoryPageMemoizedSelectors,
  getDaffCategoryPageSelectors,
} from './category-page/category-page.selector';

export interface DaffCategoryMemoizedSelectors<
	T extends DaffCategoryRequest = DaffCategoryRequest,
	V extends DaffGenericCategory<V> = DaffCategory,
	U extends DaffCategoryPageConfigurationState<T> = DaffCategoryPageConfigurationState<T>,
	W extends DaffProduct = DaffProduct
> extends
	DaffCategoryFeatureMemoizedSelectors<T, V, U>,
	DaffCategoryPageMemoizedSelectors<T, V, U>,
	DaffCategoryEntitiesMemoizedSelectors<V> {
	selectSelectedCategory: MemoizedSelector<Record<string, any>, V>;
	selectCategoryPageProducts: MemoizedSelector<Record<string, any>, W[]>;
	selectCategory: MemoizedSelectorWithProps<Record<string, any>, Record<string, any>, V>;
	selectProductsByCategory: MemoizedSelectorWithProps<Record<string, any>, Record<string, any>, W[]>;
	selectTotalProductsByCategory: MemoizedSelectorWithProps<Record<string, any>, Record<string, any>, number>;
}

const createCategorySelectors = <T extends DaffCategoryRequest, V extends DaffGenericCategory<V>, U extends DaffCategoryPageConfigurationState<T>, W extends DaffProduct>(): DaffCategoryMemoizedSelectors<T, V, U, W> => {
  const { selectProductEntities, selectAllProducts } = getDaffProductSelectors<W>();

  const {
    selectCategoryEntities,
  } = getDaffCategoryEntitiesSelectors<T, V, U>();
  const {
    selectSelectedCategoryId,
    selectCategoryPageProductIds,
  } = getDaffCategoryPageSelectors<T, V, U>();
  /**
   * Combinatoric Category Selectors
   */
  const selectSelectedCategory = createSelector(
    selectCategoryEntities,
    selectSelectedCategoryId,
    (entities: Dictionary<V>, selectedCategoryId: V['id']) => entities[selectedCategoryId],
  );

  const selectCategoryPageProducts = createSelector(
    selectCategoryPageProductIds,
    selectProductEntities,
    (ids, products: Dictionary<W>) => ids.map(id => products[id]).filter(p => p != null),
  );

  const selectCategory = createSelector(
    selectCategoryEntities,
    (entities: Dictionary<V>, props) =>  entities[props.id],
  );

  const selectProductsByCategory = createSelector(
    selectCategoryEntities,
    selectAllProducts,
    (entities, products, props) => entities[props.id] && entities[props.id].product_ids
      ? products.filter(product => entities[props.id].product_ids.indexOf(product.id) >= 0)
      : null,
  );

  const selectTotalProductsByCategory = createSelector(
    selectCategoryEntities,
    selectAllProducts,
    (entities, products, props) => selectProductsByCategory.projector(entities, products, { id: props.id })
      ? selectProductsByCategory.projector(entities, products, { id: props.id }).length
      : null,
  );

  return {
    ...getDaffCategoryFeatureSelector<T, V, U>(),
    ...getDaffCategoryEntitiesSelectors<T, V, U>(),
    ...getDaffCategoryPageSelectors<T, V, U>(),
    selectSelectedCategory,
    selectCategoryPageProducts,
    selectCategory,
    selectProductsByCategory,
    selectTotalProductsByCategory,
  };
};

export const getDaffCategorySelectors = (() => {
  let cache;
  return <
		T extends DaffCategoryRequest = DaffCategoryRequest,
		V extends DaffGenericCategory<V> = DaffCategory,
		U extends DaffCategoryPageConfigurationState<T> = DaffCategoryPageConfigurationState<T>,
		W extends DaffProduct = DaffProduct
	>(): DaffCategoryMemoizedSelectors<T, V, U, W> => cache = cache
    ? cache
    : createCategorySelectors<T, V, U, W>();
})();