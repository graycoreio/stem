import {
  ID,
  DaffLocatable,
} from '@daffodil/core';
import { DaffSortDirectionEnum } from '@daffodil/core/state';

import { DaffCategory } from './category';
import { DaffCategoryFilterRequest } from './filters/public_api';

/**
 * When you request a category page, there's two ways to do so, via URL or via ID.
 */
export enum DaffCategoryRequestKind {
  URL = 'URL',
  // eslint-disable-next-line @typescript-eslint/no-shadow
  ID = 'ID'
}

/**
 * A model of the request sent to the {@link DaffCategoryServiceInterface} to retrieve information
 * about a category.
 */
export interface DaffCategoryBaseRequest {
  /**
   * The properties by which to filter the items of the category being requested.
   */
  filter_requests?: DaffCategoryFilterRequest[];

  /**
   * The option by which to sort a category's items.
   */
  applied_sort_option?: string;

  /**
   * The direction by which to sort the category's items.
   */
  applied_sort_direction?: DaffSortDirectionEnum;

  /**
   * What page of the category's items to retrieve.
   */
  current_page?: number;

  /**
   * The number of items per-page to request.
   */
  page_size?: number;
}

/**
 * The request used to retrieve a category and its relevant items.
 */
export type DaffCategoryRequest = DaffCategoryIdRequest | DaffCategoryUrlRequest;

/**
 * A request used to retrieve a category by its uid.
 */
export interface DaffCategoryIdRequest extends DaffCategoryBaseRequest {
  id: DaffCategory['id'];
  kind: DaffCategoryRequestKind.ID;
}

/**
 * A request used to retrieve a category by its URL.
 * The qualified URL without domain.
 * e.g. a/path/to/the/category.html
 */
export interface DaffCategoryUrlRequest extends DaffCategoryBaseRequest, DaffLocatable {
  kind: DaffCategoryRequestKind.URL;
};
