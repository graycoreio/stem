import { MagentoProduct } from './magento-product';
import { MagentoSimpleProduct } from './simple-product';

/**
 * @deprecated import from @daffodil/composite-product/driver/magento instead.
 */
export enum MagentoPriceTypeEnum {
	fixed = 'FIXED',
	percent = 'PERCENT',
	dynamic = 'DYNAMIC'
}

/**
 * @deprecated import from @daffodil/composite-product/driver/magento instead.
 */
export interface MagentoBundledProduct extends MagentoProduct {
	items: MagentoBundledProductItem[];
}

/**
 * @deprecated import from @daffodil/composite-product/driver/magento instead.
 */
export interface MagentoBundledProductItem {
	required: boolean;
	sku: string;
	title: string;
	type: string;
	options: MagentoBundledProductItemOption[];
	option_id?: number;
	position?: number;
}

/**
 * @deprecated import from @daffodil/composite-product/driver/magento instead.
 */
export interface MagentoBundledProductItemOption {
	uid: string;
	label: string;
	price: number;
	quantity: number;
	can_change_quantity?: boolean;
	is_default: boolean;
	position?: number;
	price_type?: MagentoPriceTypeEnum;
	product?: MagentoSimpleProduct;
}
