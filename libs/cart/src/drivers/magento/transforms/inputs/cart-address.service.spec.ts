import { TestBed } from '@angular/core/testing';

import {
  DaffCartAddressFactory
} from '@daffodil/cart/testing';

import { DaffMagentoCartAddressInputTransformer } from './cart-address.service';

describe('Driver | Magento | Cart | Transformer | MagentoCartAddress', () => {
  let service: DaffMagentoCartAddressInputTransformer;

  let daffCartAddressFactory: DaffCartAddressFactory;

  let mockDaffCartAddress;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoCartAddressInputTransformer
      ]
    });

    service = TestBed.get(DaffMagentoCartAddressInputTransformer);

    daffCartAddressFactory = TestBed.get(DaffCartAddressFactory);

    mockDaffCartAddress = daffCartAddressFactory.create();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform | transforming a cart address', () => {
    let transformedCartAddress;
    let street;
    let city;
    let firstname;
    let passThrough;

    beforeEach(() => {
      street = 'street';
      city = 'city';
      firstname = 'firstname';
      passThrough = 'passThrough';

      mockDaffCartAddress.street = street;
      mockDaffCartAddress.city = city;
      mockDaffCartAddress.firstname = firstname;
      mockDaffCartAddress.passThrough = passThrough;

      transformedCartAddress = service.transform(mockDaffCartAddress);
    });

    it('should return an object with the correct values', () => {
      expect(transformedCartAddress.street).toEqual([street]);
      expect(transformedCartAddress.city).toEqual(city);
      expect(transformedCartAddress.firstname).toEqual(firstname);
    });

    it('should pass through values not touched by the transformer', () => {
      expect(transformedCartAddress.passThrough).toEqual(passThrough);
    });
  })
});
