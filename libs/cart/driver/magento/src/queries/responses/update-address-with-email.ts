import { MagentoGetCartResponse } from './get-cart';

export interface MagentoUpdateAddressWithEmailResponse {
  setBillingAddressOnCart: {
    __typename?: string;
    cart: {
      __typename?: string;
      id: MagentoGetCartResponse['cart']['id'];
    };
  };
  setShippingAddressesOnCart: {
    __typename?: string;
    cart: {
      __typename?: string;
      id: MagentoGetCartResponse['cart']['id'];
    };
  };
  setGuestEmailOnCart: MagentoGetCartResponse;
}
