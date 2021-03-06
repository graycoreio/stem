import { DaffCategoryFilterRangeBase } from '../../../../../models/public_api';

/**
 * Unapplies the applied filter options of a {@link DaffCategoryFilterRangeBase}
 *
 * @idempotent {filter}
 * @docs-private
 */
export const daffClearFilterRange = <T, U extends DaffCategoryFilterRangeBase<T>>(filter: U): U => ({
  ...filter,
  options: {},
});
