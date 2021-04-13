import { TestBed } from '@angular/core/testing';

import { DaffCategoryFilter } from '@daffodil/category';
import {
  DaffCategoryFilterEqualFactory,
  DaffCategoryFilterRangeNumericFactory,
} from '@daffodil/category/testing';
import { Dict } from '@daffodil/core';

import { daffClearFilters } from './clear-filters';

describe('@daffodil/category | filters | behaviors | clear | daffClearFilters', () => {
  let categoryFilterEqualFactory: DaffCategoryFilterEqualFactory;
  let categoryFilterRangeNumericFactory: DaffCategoryFilterRangeNumericFactory;

  beforeEach(() => {
		 TestBed.configureTestingModule({});

		 categoryFilterEqualFactory = TestBed.inject(DaffCategoryFilterEqualFactory);
		 categoryFilterRangeNumericFactory = TestBed.inject(DaffCategoryFilterRangeNumericFactory);
  });

  it('should clear all filters provided', () => {
    const colorFilter = categoryFilterEqualFactory.create({
      name: 'color',
      options: {
        red: {
          applied: true,
          value: 'red',
        },
        blue: {
          applied: true,
          value: 'blue',
        },
      },
    });
    const priceFilter = categoryFilterRangeNumericFactory.create({
      name: 'price',
      min: 0,
      max: 200,
      options: {
        '0-20': {
          applied: true,
          min: {
            label: '0',
            value: 0,
          },
          max: {
            label: '20',
            value: 20,
          },
        },
      },
    });
    const filters: Dict<DaffCategoryFilter> = {
      color: colorFilter,
      price: priceFilter,
    };
    const expected: Dict<DaffCategoryFilter> = {
      ...filters,
      color: {
        ...colorFilter,
        options: {
          ...colorFilter.options,
          red: {
            ...colorFilter.options['red'],
            applied: false,
          },
          blue: {
            ...colorFilter.options['blue'],
            applied: false,
          },
        },
      },
      price: {
        ...priceFilter,
        options: {},
      },
    };

    expect(daffClearFilters(filters)).toEqual(expected);
  });
});
