import {
  DaffCategoryFilterEqual,
  DaffCategoryFilterEqualRequest,
} from '../../../../../models/public_api';

/**
 * Applies a filter request to a group of equal type filter options .
 */
export const daffApplyFilterEqual = (
  request: DaffCategoryFilterEqualRequest,
  filter: DaffCategoryFilterEqual,
): DaffCategoryFilterEqual => ({
  ...filter,
  options: request.value.reduce((acc, value) => {
    const option = filter.options[value];

    if (option) {
      acc[value] = {
        ...option,
        applied: true,
      };
    }

    return acc;
  }, { ...filter.options }),
});