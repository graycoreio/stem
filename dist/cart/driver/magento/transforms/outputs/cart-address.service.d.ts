import { DaffCartAddress } from '@daffodil/cart';
import { MagentoCartAddress } from '../../models/responses/cart-address';
/**
 * Transforms magento addresses into an object usable by daffodil.
 */
export declare class DaffMagentoCartAddressTransformer {
    /**
     * Transforms the magento MagentoCart from the magento cart query into a DaffCartAddress.
     * @param address the address from a magento cart query.
     */
    transform(address: MagentoCartAddress): DaffCartAddress;
}
