import { BehaviorSubject, of, Observable } from 'rxjs';
import { Action } from '@ngrx/store';

import { DaffProduct } from '@daffodil/product';
import { 
	DaffCategoryFacadeInterface, 
	DaffCategory, 
	DaffCategoryPageConfigurationState, 
	DaffCategoryFilter, 
	DaffCategorySortOption, 
	DaffCategoryAppliedFilter, 
	DaffSortDirectionEnum 
} from '@daffodil/category';

export class MockDaffCategoryFacade implements DaffCategoryFacadeInterface {

  category$: BehaviorSubject<DaffCategory> = new BehaviorSubject(null);
  pageConfigurationState$: BehaviorSubject<DaffCategoryPageConfigurationState> = new BehaviorSubject(null);
  currentPage$: BehaviorSubject<number> = new BehaviorSubject(null);
	totalPages$: BehaviorSubject<number> = new BehaviorSubject(null);
	totalProducts$: BehaviorSubject<number> = new BehaviorSubject(null);
  pageSize$: BehaviorSubject<number> = new BehaviorSubject(null);
  filters$: BehaviorSubject<DaffCategoryFilter[]> = new BehaviorSubject([]);
  sortOptions$: BehaviorSubject<DaffCategorySortOption[]> = new BehaviorSubject([]);
  appliedFilters$: BehaviorSubject<DaffCategoryAppliedFilter[]> = new BehaviorSubject([]);
  appliedSortOption$: BehaviorSubject<string> = new BehaviorSubject(null);
  appliedSortDirection$: BehaviorSubject<DaffSortDirectionEnum> = new BehaviorSubject(null);
  products$: BehaviorSubject<DaffProduct[]> = new BehaviorSubject([]);
  categoryLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  productsLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
	errors$: BehaviorSubject<string[]> = new BehaviorSubject([]);
	isCategoryEmpty$: BehaviorSubject<boolean> = new BehaviorSubject(true);
	
	getCategoryById(id: string): Observable<DaffCategory> {
		return of(null);
	};
	getProductsByCategory(categoryId: string): Observable<DaffProduct[]> {
		return of([]);
	};
	getTotalProductsByCategory(categoryId: string): Observable<number> {
		return of(null);
	};
  dispatch(action: Action) {};
}
