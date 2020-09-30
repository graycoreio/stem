import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store, select } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffCompositeProductFactory, DaffProductFactory } from '@daffodil/product/testing';
import {
	DaffCompositeProduct,
	DaffProductLoadSuccess,
	daffProductReducers,
	DaffProductReducersState,
	DaffCompositeProductApplyOption,
	DaffProduct,
} from '@daffodil/product';

import { getDaffCompositeProductSelectors } from './composite-product.selectors';
import { daffMultiply, daffAdd, daffSubtract } from '@daffodil/core';

describe('Composite Product Selectors | integration tests', () => {

  let store: Store<DaffProductReducersState>;
  const compositeProductFactory: DaffCompositeProductFactory = new DaffCompositeProductFactory();
  const productFactory: DaffProductFactory = new DaffProductFactory();
	let stubCompositeProduct: DaffCompositeProduct;
	let stubProduct: DaffProduct;
	const {
		selectCompositeProductMinPossiblePrice,
		selectCompositeProductMaxPossiblePrice,
		selectCompositeProductPossiblyHasPriceRange,
		selectCompositeProductMinPrice,
		selectCompositeProductMaxPrice,
		selectCompositeProductHasPriceRange,
		selectCompositeProductPrice,
		selectCompositeProductMinDiscountedPrice,
		selectCompositeProductMaxDiscountedPrice,
		selectCompositeProductHasDiscountedPriceRange,
		selectCompositeProductDiscountAmount,
		selectCompositeProductDiscountedPrice,
		selectCompositeProductHasDiscount
	} = getDaffCompositeProductSelectors();
	const stubPrice00 = 10;
	const stubDiscountAmount0 = 2;
	const stubPrice01 = 20;
	const stubDiscountAmount1 = 1;
	const stubPrice10 = 30;
	const stubPrice11 = 40;
	const stubQty0 = 3;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          product: combineReducers(daffProductReducers),
        })
      ]
    });

		stubCompositeProduct = compositeProductFactory.create();
		stubProduct = productFactory.create();

		// setup: set items to required, set a default option on each item, and set prices/discounts.
		stubCompositeProduct.items[0].required = true;
		stubCompositeProduct.items[0].options[0].is_default = true;
		stubCompositeProduct.items[0].options[0].price = stubPrice00;
		stubCompositeProduct.items[0].options[0].quantity = stubQty0;
		stubCompositeProduct.items[0].options[1].price = stubPrice01;
		stubCompositeProduct.items[0].options[0].discount = {
			amount: stubDiscountAmount0,
			percent: null
		}
		stubCompositeProduct.items[0].options[1].discount = {
			amount: stubDiscountAmount1,
			percent: null
		}
		stubCompositeProduct.items[1].required = false;
		stubCompositeProduct.items[1].options[0].is_default = false;
		stubCompositeProduct.items[1].options[0].price = stubPrice10;
		stubCompositeProduct.items[1].options[1].price = stubPrice11;
		store = TestBed.get(Store);
		store.dispatch(new DaffProductLoadSuccess(stubCompositeProduct));
		store.dispatch(new DaffProductLoadSuccess(stubProduct));
	});

	describe('selectCompositeProductMinPossiblePrice', () => {

		it('should return undefined if the given product id is not from a composite product', () => {
			const selector = store.pipe(select(selectCompositeProductMinPossiblePrice, { id: stubProduct.id }));
			const expected = cold('a', { a: undefined });

			expect(selector).toBeObservable(expected);
		});

		it('should initialize to the minimum possible price for the composite product', () => {
			const selector = store.pipe(select(selectCompositeProductMinPossiblePrice, { id: stubCompositeProduct.id }));
			const expected = cold('a', { a: stubCompositeProduct.price + stubPrice00 });

			expect(selector).toBeObservable(expected);
		});

		it('should not update the price when an option change occurs', () => {
			store.dispatch(new DaffCompositeProductApplyOption(
				stubCompositeProduct.id,
				<string>stubCompositeProduct.items[0].id,
				stubCompositeProduct.items[0].options[1].id
			));
			const selector = store.pipe(select(selectCompositeProductMinPossiblePrice, { id: stubCompositeProduct.id }));
			const expected = cold('a', { a: stubCompositeProduct.price + stubPrice00 });

			expect(selector).toBeObservable(expected);
		});
	});

	describe('selectCompositeProductMaxPossiblePrice', () => {

		it('should return undefined if the given product id is not from a composite product', () => {
			const selector = store.pipe(select(selectCompositeProductMaxPossiblePrice, { id: stubProduct.id }));
			const expected = cold('a', { a: undefined });

			expect(selector).toBeObservable(expected);
		});

		it('should initialize to the maximum possible price for the composite product', () => {
			const selector = store.pipe(select(selectCompositeProductMaxPossiblePrice, { id: stubCompositeProduct.id }));
			const expected = cold('a', { a: stubCompositeProduct.price + stubPrice01 + stubPrice11 });

			expect(selector).toBeObservable(expected);
		});

		it('should not update the price when an option change occurs', () => {
			store.dispatch(new DaffCompositeProductApplyOption(
				stubCompositeProduct.id,
				<string>stubCompositeProduct.items[0].id,
				stubCompositeProduct.items[0].options[1].id
			));
			const selector = store.pipe(select(selectCompositeProductMaxPossiblePrice, { id: stubCompositeProduct.id }));
			const expected = cold('a', { a: stubCompositeProduct.price + stubPrice01 + stubPrice11 });

			expect(selector).toBeObservable(expected);
		});
	});

	describe('selectCompositeProductPossiblyHasPriceRange', () => {

		it('should return false if the given product id is not from a composite product', () => {
			const selector = store.pipe(select(selectCompositeProductPossiblyHasPriceRange, { id: stubProduct.id }));
			const expected = cold('a', { a: false });

			expect(selector).toBeObservable(expected);
		});

		it('should return true if the possible min and max prices are not equal', () => {
			const selector = store.pipe(select(selectCompositeProductPossiblyHasPriceRange, { id: stubCompositeProduct.id }));
			const expected = cold('a', { a: true });

			expect(selector).toBeObservable(expected);
		});

		it('should return false if the possible min and max prices are equal', () => {
			const newCompositeProduct = compositeProductFactory.create();
			newCompositeProduct.items[0].options[0].price = 0;
			newCompositeProduct.items[0].options[1].price = 0;
			newCompositeProduct.items[1].options[0].price = 0;
			newCompositeProduct.items[1].options[1].price = 0;
			store.dispatch(new DaffProductLoadSuccess(newCompositeProduct));
			const selector = store.pipe(select(selectCompositeProductPossiblyHasPriceRange, { id: newCompositeProduct.id }));
			const expected = cold('a', { a: false });

			expect(selector).toBeObservable(expected);
		});
	});

	describe('selectCompositeProductMinPrice', () => {

		it('should return undefined if the given product id is not from a composite product', () => {
			const selector = store.pipe(select(selectCompositeProductMinPrice, { id: stubProduct.id }));
			const expected = cold('a', { a: undefined });

			expect(selector).toBeObservable(expected);
		});

		it('should initialize to the current minimum price', () => {
			const selector = store.pipe(select(selectCompositeProductMinPrice, { id: stubCompositeProduct.id }));
			const expected = cold('a', { a: stubCompositeProduct.price + stubPrice00*stubQty0 });

			expect(selector).toBeObservable(expected);
		});

		it('should update the price when an option change occurs', () => {
			store.dispatch(new DaffCompositeProductApplyOption(
				stubCompositeProduct.id,
				<string>stubCompositeProduct.items[0].id,
				stubCompositeProduct.items[0].options[1].id
			));
			const selector = store.pipe(select(selectCompositeProductMinPrice, { id: stubCompositeProduct.id }));
			const expected = cold('a', { a: stubCompositeProduct.price + stubPrice01 });

			expect(selector).toBeObservable(expected);
		});
	});

	describe('selectCompositeProductMaxPrice', () => {

		it('should return undefined if the given product id is not from a composite product', () => {
			const selector = store.pipe(select(selectCompositeProductMaxPrice, { id: stubProduct.id }));
			const expected = cold('a', { a: undefined });

			expect(selector).toBeObservable(expected);
		});

		it('should initialize to the current maximum price', () => {
			const selector = store.pipe(select(selectCompositeProductMaxPrice, { id: stubCompositeProduct.id }));
			const expected = cold('a', { a: stubCompositeProduct.price + stubPrice00*stubQty0 });

			expect(selector).toBeObservable(expected);
		});

		it('should update the price when an option change occurs', () => {
			store.dispatch(new DaffCompositeProductApplyOption(
				stubCompositeProduct.id,
				<string>stubCompositeProduct.items[0].id,
				stubCompositeProduct.items[0].options[1].id
			));
			const selector = store.pipe(select(selectCompositeProductMaxPrice, { id: stubCompositeProduct.id }));
			const expected = cold('a', { a: stubCompositeProduct.price + stubPrice01 });

			expect(selector).toBeObservable(expected);
		});
	});

	describe('selectCompositeProductHasPriceRange', () => {

		it('should return false if the given product id is not from a composite product', () => {
			const selector = store.pipe(select(selectCompositeProductHasPriceRange, { id: stubProduct.id }));
			const expected = cold('a', { a: false });

			expect(selector).toBeObservable(expected);
		});

		it('should return true if the current min and max prices are not equal', () => {
			store.dispatch(new DaffCompositeProductApplyOption(
				stubCompositeProduct.id,
				<string>stubCompositeProduct.items[0].id,
				null
			));
			const selector = store.pipe(select(selectCompositeProductHasPriceRange, { id: stubCompositeProduct.id }));
			const expected = cold('a', { a: true });

			expect(selector).toBeObservable(expected);
		});

		it('should return false if the current min and max prices are equal', () => {
			const newCompositeProduct = compositeProductFactory.create();
			newCompositeProduct.items[0].options[0].price = 0;
			newCompositeProduct.items[0].options[1].price = 0;
			newCompositeProduct.items[1].options[0].price = 0;
			newCompositeProduct.items[1].options[1].price = 0;
			store.dispatch(new DaffProductLoadSuccess(newCompositeProduct));
			const selector = store.pipe(select(selectCompositeProductHasPriceRange, { id: newCompositeProduct.id }));
			const expected = cold('a', { a: false });

			expect(selector).toBeObservable(expected);
		});
	});

	describe('selectCompositeProductPrice', () => {

		it('should return undefined if the given product id is not from a composite product', () => {
			const selector = store.pipe(select(selectCompositeProductPrice, { id: stubProduct.id }));
			const expected = cold('a', { a: undefined });

			expect(selector).toBeObservable(expected);
		});

		it('should initialize to the expected price', () => {
			const selector = store.pipe(select(selectCompositeProductPrice, { id: stubCompositeProduct.id }));
			const expected = cold('a', { a: stubCompositeProduct.price + (stubPrice00*stubCompositeProduct.items[0].options[0].quantity) });

			expect(selector).toBeObservable(expected);
		});

		it('should update the price when an option change occurs', () => {
			store.dispatch(new DaffCompositeProductApplyOption(
				stubCompositeProduct.id,
				<string>stubCompositeProduct.items[0].id,
				stubCompositeProduct.items[0].options[1].id
			));
			const selector = store.pipe(select(selectCompositeProductPrice, { id: stubCompositeProduct.id }));
			const expected = cold('a', { a: stubCompositeProduct.price + stubPrice01 });

			expect(selector).toBeObservable(expected);
		});
	});

	describe('selectCompositeProductMinDiscountedPrice', () => {

		let newCompositeProduct;

		beforeEach(() => {
			newCompositeProduct = compositeProductFactory.create();
			newCompositeProduct.items[0].required = true;
			newCompositeProduct.items[0].options[0].is_default = false;
			newCompositeProduct.items[0].options[1].is_default = false;
			newCompositeProduct.items[0].options[0].price = 10;
			newCompositeProduct.items[0].options[1].price = 10;
			newCompositeProduct.items[0].options[0].discount.amount = 5;
			newCompositeProduct.items[0].options[1].discount.amount = 2;
			newCompositeProduct.items[1].required = true;
			newCompositeProduct.items[1].options[0].is_default = false;
			newCompositeProduct.items[1].options[1].is_default = false;
			newCompositeProduct.items[1].options[0].price = 20;
			newCompositeProduct.items[1].options[1].price = 10;
			newCompositeProduct.items[1].options[0].discount.amount = 2;
			newCompositeProduct.items[1].options[1].discount.amount = 4;
			store.dispatch(new DaffProductLoadSuccess(newCompositeProduct));
		});

		it('should return undefined if the given product id is not from a composite product', () => {
			const selector = store.pipe(select(selectCompositeProductMinDiscountedPrice, { id: stubProduct.id }));
			const expected = cold('a', { a: undefined });

			expect(selector).toBeObservable(expected);
		});

		it('should initialize to the expected minimum discounted price', () => {
			const selector = store.pipe(select(selectCompositeProductMinDiscountedPrice, { id: newCompositeProduct.id }));
			const expected = cold('a', { a: newCompositeProduct.price - newCompositeProduct.discount.amount + 5 + 6 });

			expect(selector).toBeObservable(expected);
		});

		it('should update the price when an option change occurs', () => {
			store.dispatch(new DaffCompositeProductApplyOption(
				newCompositeProduct.id,
				<string>newCompositeProduct.items[0].id,
				newCompositeProduct.items[0].options[1].id,
				3
			));
			const selector = store.pipe(select(selectCompositeProductMinDiscountedPrice, { id: newCompositeProduct.id }));
			const expected = cold('a', { a: newCompositeProduct.price - newCompositeProduct.discount.amount + 8*3 + 6 });

			expect(selector).toBeObservable(expected);
		});
	});

	describe('selectCompositeProductMaxDiscountedPrice', () => {

		let newCompositeProduct;

		beforeEach(() => {
			newCompositeProduct = compositeProductFactory.create();
			newCompositeProduct.items[0].required = true;
			newCompositeProduct.items[0].options[0].is_default = false;
			newCompositeProduct.items[0].options[1].is_default = false;
			newCompositeProduct.items[0].options[0].price = 10;
			newCompositeProduct.items[0].options[1].price = 10;
			newCompositeProduct.items[0].options[0].discount.amount = 5;
			newCompositeProduct.items[0].options[1].discount.amount = 2;
			newCompositeProduct.items[1].required = true;
			newCompositeProduct.items[1].options[0].is_default = false;
			newCompositeProduct.items[1].options[1].is_default = false;
			newCompositeProduct.items[1].options[0].price = 20;
			newCompositeProduct.items[1].options[1].price = 10;
			newCompositeProduct.items[1].options[0].discount.amount = 2;
			newCompositeProduct.items[1].options[1].discount.amount = 4;
			store.dispatch(new DaffProductLoadSuccess(newCompositeProduct));
		});

		it('should return undefined if the given product id is not from a composite product', () => {
			const selector = store.pipe(select(selectCompositeProductMaxDiscountedPrice, { id: stubProduct.id }));
			const expected = cold('a', { a: undefined });

			expect(selector).toBeObservable(expected);
		});

		it('should initialize to the expected minimum discounted price', () => {
			const selector = store.pipe(select(selectCompositeProductMaxDiscountedPrice, { id: newCompositeProduct.id }));
			const expected = cold('a', { a: newCompositeProduct.price - newCompositeProduct.discount.amount + 8 + 18 });

			expect(selector).toBeObservable(expected);
		});

		it('should update the price when an option change occurs', () => {
			store.dispatch(new DaffCompositeProductApplyOption(
				newCompositeProduct.id,
				<string>newCompositeProduct.items[0].id,
				newCompositeProduct.items[0].options[0].id,
				3
			));
			const selector = store.pipe(select(selectCompositeProductMaxDiscountedPrice, { id: newCompositeProduct.id }));
			const expected = cold('a', { a: newCompositeProduct.price - newCompositeProduct.discount.amount + 5*3 + 18 });

			expect(selector).toBeObservable(expected);
		});
	});

	describe('selectCompositeProductHasDiscountedPriceRange', () => {

		it('should return false if the given product id is not from a composite product', () => {
			const selector = store.pipe(select(selectCompositeProductHasDiscountedPriceRange, { id: stubProduct.id }));
			const expected = cold('a', { a: false });

			expect(selector).toBeObservable(expected);
		});

		it('should return true if the current min and max prices are not equal', () => {
			store.dispatch(new DaffCompositeProductApplyOption(
				stubCompositeProduct.id,
				<string>stubCompositeProduct.items[0].id,
				null
			));
			const selector = store.pipe(select(selectCompositeProductHasDiscountedPriceRange, { id: stubCompositeProduct.id }));
			const expected = cold('a', { a: true });

			expect(selector).toBeObservable(expected);
		});

		it('should return false if the current min and max prices are equal', () => {
			const newCompositeProduct = compositeProductFactory.create();
			newCompositeProduct.items[0].options[0].price = 0;
			newCompositeProduct.items[0].options[1].price = 0;
			newCompositeProduct.items[1].options[0].price = 0;
			newCompositeProduct.items[1].options[1].price = 0;
			newCompositeProduct.items[1].options[1].discount.amount = 0;
			newCompositeProduct.items[1].options[1].discount.amount = 0;
			newCompositeProduct.items[1].options[1].discount.amount = 0;
			newCompositeProduct.items[1].options[1].discount.amount = 0;
			store.dispatch(new DaffProductLoadSuccess(newCompositeProduct));
			const selector = store.pipe(select(selectCompositeProductHasDiscountedPriceRange, { id: newCompositeProduct.id }));
			const expected = cold('a', { a: false });

			expect(selector).toBeObservable(expected);
		});
	});

	describe('selectCompositeProductDiscountAmount', () => {

		it('should return undefined if the given product id is not from a composite product', () => {
			const selector = store.pipe(select(selectCompositeProductDiscountAmount, { id: stubProduct.id }));
			const expected = cold('a', { a: undefined });

			expect(selector).toBeObservable(expected);
		});

		it('should initialize to the expected discount amount', () => {
			const selector = store.pipe(select(selectCompositeProductDiscountAmount, { id: stubCompositeProduct.id }));
			const expected = cold('a', { a: stubCompositeProduct.discount.amount + (stubDiscountAmount0*stubCompositeProduct.items[0].options[0].quantity) });

			expect(selector).toBeObservable(expected);
		});

		it('should update the discount amount when an option change occurs', () => {
			stubCompositeProduct.items[0].options[0].quantity = stubQty0;
			store.dispatch(new DaffProductLoadSuccess(stubCompositeProduct));
			const selector = store.pipe(select(selectCompositeProductDiscountAmount, { id: stubCompositeProduct.id }));
			const expected = cold('a', { a: stubCompositeProduct.discount.amount + (stubDiscountAmount0*stubQty0) });

			expect(selector).toBeObservable(expected);
		});
	});

	describe('selectCompositeProductDiscountedPrice', () => {

		it('should return undefined if the given product id is not from a composite product', () => {
			const selector = store.pipe(select(selectCompositeProductDiscountedPrice, { id: stubProduct.id }));
			const expected = cold('a', { a: undefined });

			expect(selector).toBeObservable(expected);
		});

		it('should initialize to the expected discounted price', () => {
			const selector = store.pipe(select(selectCompositeProductDiscountedPrice, { id: stubCompositeProduct.id }));
			const price = daffAdd(
				stubCompositeProduct.price,
				daffMultiply(stubCompositeProduct.items[0].options[0].price, stubCompositeProduct.items[0].options[0].quantity),
			);
			const discount = daffAdd(
				stubCompositeProduct.discount.amount,
				daffMultiply(stubCompositeProduct.items[0].options[0].discount.amount, stubCompositeProduct.items[0].options[0].quantity)
			)
			const expected = cold('a', { a: daffSubtract(price, discount) });

			expect(selector).toBeObservable(expected);
		});

		it('should update the discounted price when an option change occurs', () => {
			store.dispatch(new DaffCompositeProductApplyOption(
				stubCompositeProduct.id,
				<string>stubCompositeProduct.items[0].id,
				stubCompositeProduct.items[0].options[1].id,
				stubQty0
			));
			const selector = store.pipe(select(selectCompositeProductDiscountedPrice, { id: stubCompositeProduct.id }));
			const expected = cold('a', { a:
				stubCompositeProduct.price
				+ (stubCompositeProduct.items[0].options[1].price * stubQty0)
				- stubCompositeProduct.discount.amount
				- (stubCompositeProduct.items[0].options[1].discount.amount * stubQty0)
			});
			expect(selector).toBeObservable(expected);
		});

		describe('when the price or discount are long decimal values', () => {

			it('should return the expected discounted price', () => {
				const newCompositeProduct = compositeProductFactory.create();
				newCompositeProduct.price = 70.53578;
				newCompositeProduct.discount.amount = 20.3243;
				newCompositeProduct.items[0].options[0].price = 10.3287;
				newCompositeProduct.items[0].options[0].quantity = 1;
				newCompositeProduct.items[0].options[0].is_default = true;
				newCompositeProduct.items[1].required = false;
				newCompositeProduct.items[1].options[0].is_default = false;
				newCompositeProduct.items[0].options[0].discount = {
					amount: 1.53518,
					percent: null
				};
				store.dispatch(new DaffProductLoadSuccess(newCompositeProduct));
				const selector = store.pipe(select(selectCompositeProductDiscountedPrice, { id: newCompositeProduct.id }));
				const expected = cold('a', { a: 59.005 });
				expect(selector).toBeObservable(expected);
			});
		});
	});

	describe('selectCompositeProductHasDiscount', () => {

		it('should return undefined if the given product id is not from a composite product', () => {
			const selector = store.pipe(select(selectCompositeProductHasDiscount, { id: stubProduct.id }));
			const expected = cold('a', { a: undefined });

			expect(selector).toBeObservable(expected);
    });

    describe('when the product has a discount', () => {
      let mockProduct;

      beforeEach(() => {
        mockProduct = compositeProductFactory.create({
          discount: {
            amount: 10,
            percent: 10
          }
        });
        store.dispatch(new DaffProductLoadSuccess(mockProduct));
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCompositeProductHasDiscount, { id: mockProduct.id }));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the product does not have a discount', () => {
      let mockProduct;

      beforeEach(() => {
        mockProduct = compositeProductFactory.create({
          discount: {
            amount: 0,
            percent: 0
          }
        });
        store.dispatch(new DaffProductLoadSuccess(mockProduct));
      });

      it('should return false', () => {
        const selector = store.pipe(select(selectCompositeProductHasDiscount, { id: mockProduct.id }));
        const expected = cold('a', { a: false });

        expect(selector).toBeObservable(expected);
      });
    });
	});
});
