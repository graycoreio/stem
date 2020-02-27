import { EntityState } from '@ngrx/entity';
import { CategoryReducerState } from '../reducers/category/category-reducer-state.interface';
import { DaffCategory } from '../models/inputs/category';

export interface CategoryReducersState {
  category: CategoryReducerState;
  categoryEntities: EntityState<DaffCategory>;
}
