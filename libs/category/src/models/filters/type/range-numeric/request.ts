import { DaffCategoryFilterType } from '../category-filter-type';
import { DaffCategoryFilterRangeRequestBase } from '../range/public_api';

export interface DaffCategoryFilterRangeNumericRequest extends DaffCategoryFilterRangeRequestBase<number> {
	type: DaffCategoryFilterType.RangeNumeric;
}