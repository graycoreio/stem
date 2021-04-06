import {
  DaffCategoryFilter,
  DaffCategoryFilterRequest,
  DaffCategoryFilterEqualOption,
  DaffCategoryFilterType,
  DaffCategoryFilterRangePair,
} from '../../models/public_api';
import { DaffCategoryUnknownFilterType } from '../errors/unknown-filter-type.error';
import { daffCategoryFindAppliedFilterOptions } from '../find-applied/find-applied-options';
import { daffCategoryFilterEqualToRequest } from '../type/equal/to-request/filter-to-request';
import { daffCategoryFilterRangeNumericToRequest } from '../type/range-numeric/to-request/filter-to-request';




/**
 * Builds a category filter request from a category filter.
 * Returns null if the category filter does not have at least one applied option.
 *
 * @param filter The filter from which the request should be built.
 */
export function daffCategoryFilterToRequest(filter: DaffCategoryFilter): DaffCategoryFilterRequest {
  const appliedOptions = daffCategoryFindAppliedFilterOptions(filter);

  if (appliedOptions.length > 0) {
    switch (filter.type) {
      case DaffCategoryFilterType.RangeNumeric:
        return daffCategoryFilterRangeNumericToRequest(filter, <DaffCategoryFilterRangePair<number>[]>appliedOptions);
      case DaffCategoryFilterType.Equal:
        return daffCategoryFilterEqualToRequest(filter, <DaffCategoryFilterEqualOption[]>appliedOptions);
      default:
        throw new DaffCategoryUnknownFilterType('Unknown filter type');
    }
  } else {
    return null;
  }
};