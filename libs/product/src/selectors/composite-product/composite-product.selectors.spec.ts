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

describe('Composite Product Selectors | integration tests', () => {

  let store: Store<DaffProductReducersState>;
  const compositeProductFactory: DaffCompositeProductFactory = new DaffCompositeProductFactory();
  const productFactory: DaffProductFactory = new DaffProductFactory();
	let stubCompositeProduct: DaffCompositeProduct;
	let stubProduct: DaffProduct;
	const {
		selectCompositeProductMinOptionalPrice,
		selectCompositeProductMaxOptionalPrice,
		selectCompositeProductHasOptionalPriceRange,
		selectCompositeProductMinOptionalDiscountedPrice,
		selectCompositeProductMaxOptionalDiscountedPrice,
		selectCompositeProductHasOptionalDiscountedPriceRange,
		selectCompositeProductHasOptionalDiscount,
		selectCompositeProductMinRequiredPrice,
		selectCompositeProductMaxRequiredPrice,
		selectCompositeProductHasRequiredPriceRange,
		selectCompositeProductMinRequiredDiscountedPrice,
		selectCompositeProductMaxRequiredDiscountedPrice,
		selectCompositeProductHasRequiredDiscountedPriceRange,
		selectCompositeProductHasRequiredDiscount
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

	describe('selectCompositeProductMinOptionalPrice', () => {

		it('should return undefined if the given product id is not from a composite product', () => {
			const selector = store.pipe(select(selectCompositeProductMinOptionalPrice, { id: stubProduct.id }));
			const expected = cold('a', { a: undefined });

			expect(selector).toBeObservable(expected);
		});

		it('should initialize to the minimum price for the composite product including optional items', () => {
			const selector = store.pipe(select(selectCompositeProductMinOptionalPrice, { id: stubCompositeProduct.id }));
			const expected = cold('a', { a: stubCompositeProduct.price + stubPrice00 + stubPrice10 });

			expect(selector).toBeObservable(expected);
		});

		it('should not update the price when an option change occurs', () => {
			store.dispatch(new DaffCompositeProductApplyOption(
				stubCompositeProduct.id,
				<string>stubCompositeProduct.items[0].id,
				stubCompositeProduct.items[0].options[1].id
			));
			const selector = store.pipe(select(selectCompositeProductMinOptionalPrice, { id: stubCompositeProduct.id }));
			const expected = cold('a', { a: stubCompositeProduct.price + stubPrice00 + stubPrice10 });

			expect(selector).toBeObservable(expected);
		});
	});

	describe('selectCompositeProductMaxOptionalPrice', () => {

		it('should return undefined if the given product id is not from a composite product', () => {
			const selector = store.pipe(select(selectCompositeProductMaxOptionalPrice, { id: stubProduct.id }));
			const expected = cold('a', { a: undefined });

			expect(selector).toBeObservable(expected);
		});

		it('should initialize to the maximum price for the composite product including optional items', () => {
			const selector = store.pipe(select(selectCompositeProductMaxOptionalPrice, { id: stubCompositeProduct.id }));
			const expected = cold('a', { a: stubCompositeProduct.price + stubPrice01 + stubPrice11 });

			expect(selector).toBeObservable(expected);
		});

		it('should not update the price when an option change occurs', () => {
			store.dispatch(new DaffCompositeProductApplyOption(
				stubCompositeProduct.id,
				<string>stubCompositeProduct.items[0].id,
				stubCompositeProduct.items[0].options[1].id
			));
			const selector = store.pipe(select(selectCompositeProductMaxOptionalPrice, { id: stubCompositeProduct.id }));
			const expected = cold('a', { a: stubCompositeProduct.price + stubPrice01 + stubPrice11 });

			expect(selector).toBeObservable(expected);
		});
	});

	describe('selectCompositeProductHasOptionalPriceRange', () => {

		it('should return false if the given product id is not from a composite product', () => {
			const selector = store.pipe(select(selectCompositeProductHasOptionalPriceRange, { id: stubProduct.id }));
			const expected = cold('a', { a: false });

			expect(selector).toBeObservable(expected);
		});

		it('should return true if the possible min and max prices are not equal', () => {
			const selector = store.pipe(select(selectCompositeProductHasOptionalPriceRange, { id: stubCompositeProduct.id }));
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
			const selector = store.pipe(select(selectCompositeProductHasOptionalPriceRange, { id: newCompositeProduct.id }));
			const expected = cold('a', { a: false });

			expect(selector).toBeObservable(expected);
		});
	});

	describe('selectCompositeProductMinOptionalDiscountedPrice', () => {

		it('should return undefined if the given product id is not from a composite product', () => {
			const selector = store.pipe(select(selectCompositeProductMinOptionalDiscountedPrice, { id: stubProduct.id }));
			const expected = cold('a', { a: undefined });

			expect(selector).toBeObservable(expected);
		});

		it('should initialize to the minimum discounted price for the composite product including optional items', () => {
			const selector = store.pipe(select(selectCompositeProductMinOptionalDiscountedPrice, { id: stubCompositeProduct.id }));
			const expected = cold('a', { a: stubCompositeProduct.price - stubCompositeProduct.discount.amount + stubPrice00 - stubDiscountAmount0 + stubPrice10 });

			expect(selector).toBeObservable(expected);
		});

		it('should not update the price when an option change occurs', () => {
			store.dispatch(new DaffCompositeProductApplyOption(
				stubCompositeProduct.id,
				<string>stubCompositeProduct.items[0].id,
				stubCompositeProduct.items[0].options[1].id
			));
			const selector = store.pipe(select(selectCompositeProductMinOptionalDiscountedPrice, { id: stubCompositeProduct.id }));
			const expected = cold('a', { a: stubCompositeProduct.price - stubCompositeProduct.discount.amount + stubPrice00 - stubDiscountAmount0 + stubPrice10 });

			expect(selector).toBeObservable(expected);
		});
	});

	describe('selectCompositeProductMaxOptionalDiscountedPrice', () => {

		it('should return undefined if the given product id is not from a composite product', () => {
			const selector = store.pipe(select(selectCompositeProductMaxOptionalDiscountedPrice, { id: stubProduct.id }));
			const expected = cold('a', { a: undefined });

			expect(selector).toBeObservable(expected);
		});

		it('should initialize to the maximum discounted price for the composite product including optional items', () => {
			const selector = store.pipe(select(selectCompositeProductMaxOptionalDiscountedPrice, { id: stubCompositeProduct.id }));
			const expected = cold('a', { a: stubCompositeProduct.price - stubCompositeProduct.discount.amount + stubPrice01 - stubDiscountAmount1 + stubPrice11 });

			expect(selector).toBeObservable(expected);
		});

		it('should not update the price when an option change occurs', () => {
			store.dispatch(new DaffCompositeProductApplyOption(
				stubCompositeProduct.id,
				<string>stubCompositeProduct.items[0].id,
				stubCompositeProduct.items[0].options[1].id
			));
			const selector = store.pipe(select(selectCompositeProductMaxOptionalDiscountedPrice, { id: stubCompositeProduct.id }));
			const expected = cold('a', { a: stubCompositeProduct.price - stubCompositeProduct.discount.amount + stubPrice01 - stubDiscountAmount1 + stubPrice11 });

			expect(selector).toBeObservable(expected);
		});
	});

	describe('selectCompositeProductHasOptionalDiscountedPriceRange', () => {

		it('should return false if the given product id is not from a composite product', () => {
			const selector = store.pipe(select(selectCompositeProductHasOptionalDiscountedPriceRange, { id: stubProduct.id }));
			const expected = cold('a', { a: false });

			expect(selector).toBeObservable(expected);
		});

		it('should return true if the min and max prices including optional items are not equal', () => {
			const selector = store.pipe(select(selectCompositeProductHasOptionalDiscountedPriceRange, { id: stubCompositeProduct.id }));
			const expected = cold('a', { a: true });

			expect(selector).toBeObservable(expected);
		});

		it('should return false if the possible min and max prices including optional items are equal', () => {
			const newCompositeProduct = compositeProductFactory.create();
			newCompositeProduct.items[0].options[0].price = 0;
			newCompositeProduct.items[0].options[1].price = 0;
			newCompositeProduct.items[1].options[0].price = 0;
			newCompositeProduct.items[1].options[1].price = 0;
			store.dispatch(new DaffProductLoadSuccess(newCompositeProduct));
			const selector = store.pipe(select(selectCompositeProductHasOptionalDiscountedPriceRange, { id: newCompositeProduct.id }));
			const expected = cold('a', { a: false });

			expect(selector).toBeObservable(expected);
		});
	});

	describe('selectCompositeProductHasOptionalDiscount', () => {

		it('should return undefined if the given product id is not from a composite product', () => {
			const selector = store.pipe(select(selectCompositeProductHasOptionalDiscount, { id: stubProduct.id }));
			const expected = cold('a', { a: undefined });

			expect(selector).toBeObservable(expected);
		});

		it('should return true if the product, including optional items, has a discount', () => {
			const selector = store.pipe(select(selectCompositeProductHasOptionalDiscount, { id: stubCompositeProduct.id }));
			const expected = cold('a', { a: true });

			expect(selector).toBeObservable(expected);
		});

		it('should return false if the product, including optional items, does not have a discount', () => {
			const newCompositeProduct = compositeProductFactory.create();
			newCompositeProduct.discount.amount = 0;
			newCompositeProduct.items[0].options[0].price = 10;
			newCompositeProduct.items[0].options[1].price = 20;
			newCompositeProduct.items[1].options[0].price = 30;
			newCompositeProduct.items[1].options[1].price = 40;
			newCompositeProduct.items[0].options[0].discount.amount = 0;
			newCompositeProduct.items[0].options[1].discount.amount = 0;
			newCompositeProduct.items[1].options[0].discount.amount = 0;
			newCompositeProduct.items[1].options[1].discount.amount = 0;
			store.dispatch(new DaffProductLoadSuccess(newCompositeProduct));
			const selector = store.pipe(select(selectCompositeProductHasOptionalDiscount, { id: newCompositeProduct.id }));
			const expected = cold('a', { a: false });

			expect(selector).toBeObservable(expected);
		});

		it(`should return false if the product\'s min and max discount amounts are zero, 
				but there is a discount in between those extremes`, () => {
			const newCompositeProduct = compositeProductFactory.create();
			newCompositeProduct.discount.amount = 0;
			newCompositeProduct.items[0].options[0].price = 10;
			newCompositeProduct.items[0].options[1].price = 20;
			newCompositeProduct.items[0].options.push({
				id: 'id',
				name: 'inbetween option with discount',
				price: 15,
				is_default: false,
				quantity: 1,
				discount: {
					amount: 4,
					percent: 10
				}
			})
			newCompositeProduct.items[1].options[0].price = 0;
			newCompositeProduct.items[1].options[1].price = 0;
			newCompositeProduct.items[0].options[0].discount.amount = 0;
			newCompositeProduct.items[0].options[1].discount.amount = 0;
			newCompositeProduct.items[1].options[0].discount.amount = 0;
			newCompositeProduct.items[1].options[1].discount.amount = 0;
			store.dispatch(new DaffProductLoadSuccess(newCompositeProduct));
			const selector = store.pipe(select(selectCompositeProductHasOptionalDiscount, { id: newCompositeProduct.id }));
			const expected = cold('a', { a: false });

			expect(selector).toBeObservable(expected);
		});
	});

	describe('selectCompositeProductMinRequiredPrice', () => {

		it('should return undefined if the given product id is not from a composite product', () => {
			const selector = store.pipe(select(selectCompositeProductMinRequiredPrice, { id: stubProduct.id }));
			const expected = cold('a', { a: undefined });

			expect(selector).toBeObservable(expected);
		});

		it('should initialize to the current minimum price', () => {
			const selector = store.pipe(select(selectCompositeProductMinRequiredPrice, { id: stubCompositeProduct.id }));
			const expected = cold('a', { a: stubCompositeProduct.price + stubPrice00*stubQty0 });

			expect(selector).toBeObservable(expected);
		});

		it('should update the price when an option change occurs', () => {
			store.dispatch(new DaffCompositeProductApplyOption(
				stubCompositeProduct.id,
				<string>stubCompositeProduct.items[0].id,
				stubCompositeProduct.items[0].options[1].id
			));
			const selector = store.pipe(select(selectCompositeProductMinRequiredPrice, { id: stubCompositeProduct.id }));
			const expected = cold('a', { a: stubCompositeProduct.price + stubPrice01 });

			expect(selector).toBeObservable(expected);
		});
	});

	describe('selectCompositeProductMaxRequiredPrice', () => {

		it('should return undefined if the given product id is not from a composite product', () => {
			const selector = store.pipe(select(selectCompositeProductMaxRequiredPrice, { id: stubProduct.id }));
			const expected = cold('a', { a: undefined });

			expect(selector).toBeObservable(expected);
		});

		it('should initialize to the current maximum price', () => {
			const selector = store.pipe(select(selectCompositeProductMaxRequiredPrice, { id: stubCompositeProduct.id }));
			const expected = cold('a', { a: stubCompositeProduct.price + stubPrice00*stubQty0 });

			expect(selector).toBeObservable(expected);
		});

		it('should update the price when an option change occurs', () => {
			store.dispatch(new DaffCompositeProductApplyOption(
				stubCompositeProduct.id,
				<string>stubCompositeProduct.items[0].id,
				stubCompositeProduct.items[0].options[1].id
			));
			const selector = store.pipe(select(selectCompositeProductMaxRequiredPrice, { id: stubCompositeProduct.id }));
			const expected = cold('a', { a: stubCompositeProduct.price + stubPrice01 });

			expect(selector).toBeObservable(expected);
		});
	});

	describe('selectCompositeProductHasRequiredPriceRange', () => {

		it('should return false if the given product id is not from a composite product', () => {
			const selector = store.pipe(select(selectCompositeProductHasRequiredPriceRange, { id: stubProduct.id }));
			const expected = cold('a', { a: false });

			expect(selector).toBeObservable(expected);
		});

		it('should return true if the current min and max prices are not equal', () => {
			store.dispatch(new DaffCompositeProductApplyOption(
				stubCompositeProduct.id,
				<string>stubCompositeProduct.items[0].id,
				null
			));
			const selector = store.pipe(select(selectCompositeProductHasRequiredPriceRange, { id: stubCompositeProduct.id }));
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
			const selector = store.pipe(select(selectCompositeProductHasRequiredPriceRange, { id: newCompositeProduct.id }));
			const expected = cold('a', { a: false });

			expect(selector).toBeObservable(expected);
		});
	});

	describe('selectCompositeProductMinRequiredDiscountedPrice', () => {

		let newCompositeProduct;
		const item0Option0Price = 10;
		const item0Option1Price = 10;
		const item0Option0DiscountAmount = 5;
		const item0Option1DiscountAmount = 2;
		const item1Option0Price = 20;
		const item1Option1Price = 10;
		const item1Option0DiscountAmount = 2;
		const item1Option1DiscountAmount = 4;

		beforeEach(() => {
			newCompositeProduct = compositeProductFactory.create();
			newCompositeProduct.items[0].required = true;
			newCompositeProduct.items[0].options[0].is_default = false;
			newCompositeProduct.items[0].options[1].is_default = false;
			newCompositeProduct.items[0].options[0].price = item0Option0Price;
			newCompositeProduct.items[0].options[1].price = item0Option1Price;
			newCompositeProduct.items[0].options[0].discount.amount = item0Option0DiscountAmount;
			newCompositeProduct.items[0].options[1].discount.amount = item0Option1DiscountAmount;
			newCompositeProduct.items[1].required = true;
			newCompositeProduct.items[1].options[0].is_default = false;
			newCompositeProduct.items[1].options[1].is_default = false;
			newCompositeProduct.items[1].options[0].price = item1Option0Price;
			newCompositeProduct.items[1].options[1].price = item1Option1Price;
			newCompositeProduct.items[1].options[0].discount.amount = item1Option0DiscountAmount;
			newCompositeProduct.items[1].options[1].discount.amount = item1Option1DiscountAmount;
			store.dispatch(new DaffProductLoadSuccess(newCompositeProduct));
		});

		it('should return undefined if the given product id is not from a composite product', () => {
			const selector = store.pipe(select(selectCompositeProductMinRequiredDiscountedPrice, { id: stubProduct.id }));
			const expected = cold('a', { a: undefined });

			expect(selector).toBeObservable(expected);
		});

		it('should initialize to the expected minimum discounted price', () => {
			const smallestItem0DiscountedPrice = item0Option0Price - item0Option0DiscountAmount;
			const smallestItem1DiscountedPrice = item1Option1Price - item1Option1DiscountAmount;
			const selector = store.pipe(select(selectCompositeProductMinRequiredDiscountedPrice, { id: newCompositeProduct.id }));
			const expected = cold('a', { a: 
				newCompositeProduct.price - newCompositeProduct.discount.amount + 
				smallestItem0DiscountedPrice + 
				smallestItem1DiscountedPrice
			});

			expect(selector).toBeObservable(expected);
		});

		it('should update the price when an option change occurs', () => {
			const updatedOption01Quantity = 3;
			const selectedItem0DiscountedPrice = (item0Option1Price - item0Option1DiscountAmount) * updatedOption01Quantity;
			const smallestItem1DiscountedPrice = item1Option1Price - item1Option1DiscountAmount;

			store.dispatch(new DaffCompositeProductApplyOption(
				newCompositeProduct.id,
				<string>newCompositeProduct.items[0].id,
				newCompositeProduct.items[0].options[1].id,
				updatedOption01Quantity
			));
			const selector = store.pipe(select(selectCompositeProductMinRequiredDiscountedPrice, { id: newCompositeProduct.id }));
			const expected = cold('a', { a: newCompositeProduct.price - newCompositeProduct.discount.amount + 
				selectedItem0DiscountedPrice + 
				smallestItem1DiscountedPrice 
			});

			expect(selector).toBeObservable(expected);
		});
	});

	describe('selectCompositeProductMaxRequiredDiscountedPrice', () => {

		let newCompositeProduct;
		const item0Option0Price = 10;
		const item0Option1Price = 10;
		const item0Option0DiscountAmount = 5;
		const item0Option1DiscountAmount = 2;
		const item1Option0Price = 20;
		const item1Option1Price = 10;
		const item1Option0DiscountAmount = 2;
		const item1Option1DiscountAmount = 4;

		beforeEach(() => {
			newCompositeProduct = compositeProductFactory.create();
			newCompositeProduct.items[0].required = true;
			newCompositeProduct.items[0].options[0].is_default = false;
			newCompositeProduct.items[0].options[1].is_default = false;
			newCompositeProduct.items[0].options[0].price = item0Option0Price;
			newCompositeProduct.items[0].options[1].price = item0Option1Price;
			newCompositeProduct.items[0].options[0].discount.amount = item0Option0DiscountAmount;
			newCompositeProduct.items[0].options[1].discount.amount = item0Option1DiscountAmount;
			newCompositeProduct.items[1].required = true;
			newCompositeProduct.items[1].options[0].is_default = false;
			newCompositeProduct.items[1].options[1].is_default = false;
			newCompositeProduct.items[1].options[0].price = item1Option0Price;
			newCompositeProduct.items[1].options[1].price = item1Option1Price;
			newCompositeProduct.items[1].options[0].discount.amount = item1Option0DiscountAmount;
			newCompositeProduct.items[1].options[1].discount.amount = item1Option1DiscountAmount;
			store.dispatch(new DaffProductLoadSuccess(newCompositeProduct));
		});

		it('should return undefined if the given product id is not from a composite product', () => {
			const selector = store.pipe(select(selectCompositeProductMaxRequiredDiscountedPrice, { id: stubProduct.id }));
			const expected = cold('a', { a: undefined });

			expect(selector).toBeObservable(expected);
		});

		it('should initialize to the expected maximum discounted price', () => {
			const largestItem0DiscountedPrice = item0Option1Price - item0Option1DiscountAmount;
			const largestItem1DiscountedPrice = item1Option0Price - item1Option0DiscountAmount;
			const selector = store.pipe(select(selectCompositeProductMaxRequiredDiscountedPrice, { id: newCompositeProduct.id }));
			const expected = cold('a', { a: newCompositeProduct.price - newCompositeProduct.discount.amount + 
				largestItem0DiscountedPrice + 
				largestItem1DiscountedPrice
			});

			expect(selector).toBeObservable(expected);
		});

		it('should update the price when an option change occurs', () => {
			const updatedOption00Quantity = 3;
			const selectedItem0DiscountedPrice = (item0Option0Price - item0Option0DiscountAmount) * updatedOption00Quantity;
			const largestItem1DiscountedPrice = item1Option0Price - item1Option0DiscountAmount;
			store.dispatch(new DaffCompositeProductApplyOption(
				newCompositeProduct.id,
				<string>newCompositeProduct.items[0].id,
				newCompositeProduct.items[0].options[0].id,
				updatedOption00Quantity
			));
			const selector = store.pipe(select(selectCompositeProductMaxRequiredDiscountedPrice, { id: newCompositeProduct.id }));
			const expected = cold('a', { a: newCompositeProduct.price - newCompositeProduct.discount.amount + 
				selectedItem0DiscountedPrice + 
				largestItem1DiscountedPrice
			});

			expect(selector).toBeObservable(expected);
		});
	});

	describe('selectCompositeProductHasRequiredDiscountedPriceRange', () => {

		it('should return false if the given product id is not from a composite product', () => {
			const selector = store.pipe(select(selectCompositeProductHasRequiredDiscountedPriceRange, { id: stubProduct.id }));
			const expected = cold('a', { a: false });

			expect(selector).toBeObservable(expected);
		});

		it('should return true if the current min and max prices are not equal', () => {
			store.dispatch(new DaffCompositeProductApplyOption(
				stubCompositeProduct.id,
				<string>stubCompositeProduct.items[0].id,
				null
			));
			const selector = store.pipe(select(selectCompositeProductHasRequiredDiscountedPriceRange, { id: stubCompositeProduct.id }));
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
			const selector = store.pipe(select(selectCompositeProductHasRequiredDiscountedPriceRange, { id: newCompositeProduct.id }));
			const expected = cold('a', { a: false });

			expect(selector).toBeObservable(expected);
		});
	});

	describe('selectCompositeProductHasRequiredDiscount', () => {

		it('should return undefined if the given product id is not from a composite product', () => {
			const selector = store.pipe(select(selectCompositeProductHasRequiredDiscount, { id: stubProduct.id }));
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
        const selector = store.pipe(select(selectCompositeProductHasRequiredDiscount, { id: mockProduct.id }));
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
        const selector = store.pipe(select(selectCompositeProductHasRequiredDiscount, { id: mockProduct.id }));
        const expected = cold('a', { a: false });

        expect(selector).toBeObservable(expected);
      });
		});
		
		it(`should return false if the product\'s min and max discount amounts are zero, 
				but there is a discount in between those extremes`, () => {
			const newCompositeProduct = compositeProductFactory.create();
			newCompositeProduct.discount.amount = 0;
			newCompositeProduct.items[0].options[0].price = 10;
			newCompositeProduct.items[0].options[1].price = 20;
			newCompositeProduct.items[1].options[0].price = 0;
			newCompositeProduct.items[1].options[1].price = 0;
			newCompositeProduct.items[0].options[0].discount.amount = 0;
			newCompositeProduct.items[0].options[1].discount.amount = 0;
			newCompositeProduct.items[1].options[0].discount.amount = 0;
			newCompositeProduct.items[1].options[1].discount.amount = 0;
			newCompositeProduct.items[0].required = true;
			newCompositeProduct.items[0].options.push({
				id: 'id',
				name: 'inbetween option with discount',
				price: 15,
				is_default: false,
				quantity: 1,
				discount: {
					amount: 4,
					percent: 10
				}
			})
			store.dispatch(new DaffProductLoadSuccess(newCompositeProduct));
			const selector = store.pipe(select(selectCompositeProductHasRequiredDiscount, { id: newCompositeProduct.id }));
			const expected = cold('a', { a: false });

			expect(selector).toBeObservable(expected);
		});
	});
});
