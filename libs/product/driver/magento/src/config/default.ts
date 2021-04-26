import { DaffProductMagentoDriverConfig } from '../interfaces/public_api';

export const MAGENTO_PRODUCT_URI_TRUNCATION_REGEX = /(?<uri>.*)\.(.*)$/;

export const MAGENTO_PRODUCT_CONFIG_DEFAULT: DaffProductMagentoDriverConfig = {
  baseMediaUrl: '',
  truncateUri: true,
  truncatedUriMatcher: MAGENTO_PRODUCT_URI_TRUNCATION_REGEX,
};