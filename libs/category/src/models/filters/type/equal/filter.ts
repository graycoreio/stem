import { Dict } from '@daffodil/core';

import { DaffCategoryFilterBase } from '../../category-filter-base';
import { DaffCategoryFilterType } from '../category-filter-type';
import { DaffCategoryFilterEqualOption } from './option';

export interface DaffCategoryFilterEqual extends DaffCategoryFilterBase {
	type: DaffCategoryFilterType.Equal;
	options: Dict<DaffCategoryFilterEqualOption>;
}