import { TestBed } from '@angular/core/testing';

import {
  DaffCart,
  DaffCartAddress,
} from '@daffodil/cart';
import { DAFF_CART_IN_MEMORY_EXTRA_ATTRIBUTES_HOOK } from '@daffodil/cart/driver/in-memory';
import {
  DaffCartFactory,
  DaffCartAddressFactory,
} from '@daffodil/cart/testing';

import { DaffInMemoryBackendCartBillingAddressService } from './cart-billing-address.service';

describe('DaffInMemoryBackendCartBillingAddressService', () => {
  let service: DaffInMemoryBackendCartBillingAddressService;
  let cartFactory: DaffCartFactory;
  let cartAddressFactory: DaffCartAddressFactory;

  let mockCart: DaffCart;
  let mockCartAddress: DaffCartAddress;
  let cartId;
  let reqInfoStub;
  let baseUrl;
  let cartUrl;
  let collection: DaffCart[];
  let extraAttributes;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffInMemoryBackendCartBillingAddressService,
        {
          provide: DAFF_CART_IN_MEMORY_EXTRA_ATTRIBUTES_HOOK,
          useValue: () => extraAttributes,
        },
      ],
    });
    service = TestBed.inject(DaffInMemoryBackendCartBillingAddressService);

    cartFactory = TestBed.inject(DaffCartFactory);
    cartAddressFactory = TestBed.inject(DaffCartAddressFactory);

    mockCart = cartFactory.create();
    mockCartAddress = cartAddressFactory.create();
    extraAttributes = {
      extraField: 'extraField',
    };
    mockCart.billing_address = mockCartAddress;
    collection = [mockCart];
    cartId = mockCart.id;
    baseUrl = 'api/cart-billing-address/';
    cartUrl = `/${baseUrl}${cartId}/`;
    reqInfoStub = {
      id: cartId,
      resourceUrl: baseUrl,
      collection,
      req: {
        body: {},
      },
      utils: {
        createResponse$: func => func(),
        getJsonBody: req => req.body,
        findById: (ary, id) => ary.find(e => e.id === id),
      },
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('processing a get billing address request', () => {
    let result;

    beforeEach(() => {
      reqInfoStub.url = cartUrl;

      result = service.get(reqInfoStub);
    });

    it('should return the cart billing address', () => {
      expect(result.body).toEqual(mockCartAddress);
    });
  });

  describe('processing an update billing address request', () => {
    let result;
    let updatedStreet;

    beforeEach(() => {
      updatedStreet = `${mockCartAddress.street} updated`;
      mockCartAddress.street = updatedStreet;
      reqInfoStub.url = cartUrl;
      reqInfoStub.req.body = mockCartAddress;

      result = service.put(reqInfoStub);
    });

    it('should return a cart with the updated street', () => {
      expect(result.body.billing_address.street).toEqual(updatedStreet);
    });

    it('should set extra_attributes to the value returned by the provided hook function', () => {
      expect(result.body.extra_attributes).toEqual(extraAttributes);
    });
  });
});
