import { TestBed } from '@angular/core/testing';

import {
  DaffCategoryFilterEqual,
  DaffCategoryFilterEqualRequestReplacement,
  DaffCategoryFilterRangeNumericRequest,
  DaffCategoryFilterReplacement,
  DaffCategoryFilterRequestNameMismatch,
  DaffCategoryFilterTypeReplacement,
  DaffCategoryFilterRequestTypeMismatch,
  DaffCategoryUnknownFilterType,
} from '@daffodil/category';
import {
  DaffCategoryFilterEqualFactory,
  DaffCategoryFilterRangeNumericFactory,
  DaffCategoryFilterRequestEqualFactory,
  DaffCategoryFilterRequestRangeNumericFactory,
} from '@daffodil/category/testing';

import { daffApplyFilter } from './apply-filter';

describe('@daffodil/category | filters | behaviors | apply | daffApplyFilter', () => {

  let categoryFilterEqualFactory: DaffCategoryFilterEqualFactory;
  let categoryFilterRangeNumericFactory: DaffCategoryFilterRangeNumericFactory;
  let categoryFilterRequestEqualFactory: DaffCategoryFilterRequestEqualFactory;
  let categoryFilterRequestRangeNumericFactory: DaffCategoryFilterRequestRangeNumericFactory;

  beforeEach(() => {
		 TestBed.configureTestingModule({});

		 categoryFilterEqualFactory = TestBed.inject(DaffCategoryFilterEqualFactory);
		 categoryFilterRangeNumericFactory = TestBed.inject(DaffCategoryFilterRangeNumericFactory);
		 categoryFilterRequestEqualFactory = TestBed.inject(DaffCategoryFilterRequestEqualFactory);
		 categoryFilterRequestRangeNumericFactory = TestBed.inject(DaffCategoryFilterRequestRangeNumericFactory);
  });

  it('should apply an equal filter request', () => {
    const filter: DaffCategoryFilterEqual = categoryFilterEqualFactory.create({
      name: 'color',
      options: {
        red: {
          applied: false,
          value: 'red',
        },
        blue: {
          applied: false,
          value: 'blue',
        },
      },
    });
    const request: DaffCategoryFilterEqualRequestReplacement = categoryFilterRequestEqualFactory.create({
      name: 'color',
      value: ['red'],
    });
    const expected: DaffCategoryFilterEqual = {
      ...filter,
      options: {
        ...filter.options,
        red: {
          ...filter.options['red'],
          applied: true,
        },
      },
    };

    expect(daffApplyFilter(request, filter)).toEqual(expected);
  });

  it('should apply a range filter request', () => {
    const request: DaffCategoryFilterRangeNumericRequest = categoryFilterRequestRangeNumericFactory.create({
      name: 'price',
      value: {
        min: 0,
        max: 20,
      },
    });

    const filter: DaffCategoryFilterReplacement = categoryFilterRangeNumericFactory.create({
      name: 'price',
      min: 0,
      max: 200,
    });

    const expected: DaffCategoryFilterReplacement = {
      ...filter,
      options: {
        ...filter.options,
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
    };

    expect(daffApplyFilter(request, filter)).toEqual(expected);
  });

  it('should throw an error if the filter name and request names do not match', () => {
    const filter: DaffCategoryFilterEqual = categoryFilterEqualFactory.create({
      name: 'not color',
      options: {
        clear: {
          applied: false,
          value: 'clear',
        },
      },
    });
    const request: DaffCategoryFilterEqualRequestReplacement = categoryFilterRequestEqualFactory.create({
      name: 'color',
      value: ['clear'],
    });

    expect(() => {
      daffApplyFilter(request, filter);
    }).toThrowMatching((e) => e instanceof DaffCategoryFilterRequestNameMismatch);
  });

  it('should throw an error if the filter type and request type do not match', () => {
    const filter: DaffCategoryFilterEqual = categoryFilterEqualFactory.create({
      name: 'color',
      options: {
        red: {
          applied: false,
          value: 'red',
        },
        blue: {
          applied: false,
          value: 'blue',
        },
      },
    });

    const request: DaffCategoryFilterRangeNumericRequest = categoryFilterRequestRangeNumericFactory.create({
      type: DaffCategoryFilterTypeReplacement.RangeNumeric,
      name: 'color',
      value: {
        min: 0,
        max: 20,
      },
    });

    expect(() => {
      daffApplyFilter(request, filter);
    }).toThrowMatching((e) => e instanceof DaffCategoryFilterRequestTypeMismatch);
  });

  it('should throw an error if the request filter type is unknown', () => {
    const filter: any = {
      type: 'some other type',
      label: 'Color',
      name: 'color',
      options: {
        red: {
          applied: false,
          value: 'red',
          label: 'Red',
        },
        blue: {
          applied: false,
          value: 'blue',
          label: 'Blue',
        },
      },
    };
    const request: any = {
      type: 'some other type',
      name: 'color',
      value: ['red'],
    };

    expect(() => {
      daffApplyFilter(request, filter);
    }).toThrowMatching((e) => e instanceof DaffCategoryUnknownFilterType);
  });

  it('should be idempotent over filter', () => {
    const request: DaffCategoryFilterRangeNumericRequest = categoryFilterRequestRangeNumericFactory.create({
      name: 'price',
      value: {
        min: 0,
        max: 20,
      },
    });

    const filter: DaffCategoryFilterReplacement = categoryFilterRangeNumericFactory.create({
      name: 'price',
      min: 0,
      max: 200,
    });

    expect((idempotentArg?: DaffCategoryFilterReplacement) => (daffApplyFilter(request, idempotentArg || filter))).toBeIdempotent();
  });
});
