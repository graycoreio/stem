import { createSelector, MemoizedSelectorWithProps } from '@ngrx/store';

import { DaffProductTypeEnum } from '../../models/product';
import { Dictionary } from '@ngrx/entity';
import { getDaffConfigurableProductEntitiesSelectors } from '../configurable-product-entities/configurable-product-entities.selectors';
import { getDaffProductEntitiesSelectors } from '../product-entities/product-entities.selectors';
import { DaffConfigurableProductVariant, DaffConfigurableProduct, DaffConfigurableProductAttribute } from '../../models/configurable-product';
import { DaffConfigurableProductEntityAttribute } from '../../reducers/configurable-product-entities/configurable-product-entity';

export interface DaffConfigurableProductMemoizedSelectors {
	selectAllConfigurableProductAttributes: MemoizedSelectorWithProps<object, object, Dictionary<string[]>>;
	selectMatchingConfigurableProductVariants: MemoizedSelectorWithProps<object, object, DaffConfigurableProductVariant[]>;
	selectConfigurableProductPrice: MemoizedSelectorWithProps<object, object, string>;
	selectSelectableConfigurableProductAttributes: MemoizedSelectorWithProps<object, object, Dictionary<string[]>>;
}

const createConfigurableProductSelectors = (): DaffConfigurableProductMemoizedSelectors => {

	const {
		selectConfigurableProductAppliedAttributes,
		selectConfigurableProductAppliedAttributesEntitiesState
	} = getDaffConfigurableProductEntitiesSelectors();

	const {
		selectProductEntities,
		selectProduct
	} = getDaffProductEntitiesSelectors();

	/**
	 * Selector for the variants of the product that match the currently applied attributes.
	 */
	const selectMatchingConfigurableProductVariants = createSelector(
		selectProductEntities,
		selectConfigurableProductAppliedAttributesEntitiesState,
		(products, appliedAttributesEntities, props) => {
			const product = <DaffConfigurableProduct>selectProduct.projector(products, { id: props.id });
			if(!product || product.type !== DaffProductTypeEnum.Configurable) {
				return [];
			}
			const appliedAttributes = selectConfigurableProductAppliedAttributes.projector(appliedAttributesEntities, { id: props.id });
			return product.variants.filter(variant => isVariantAvailable(appliedAttributes, variant))
		}
	);

	/**
	 * Selector for the range of price for current configuration of the configurable product.
	 */
	const selectConfigurableProductPrice = createSelector(
		selectProductEntities,
		selectConfigurableProductAppliedAttributesEntitiesState,
		(products, appliedAttributesEntities, props) => {
			const matchingVariants: DaffConfigurableProductVariant[] = selectMatchingConfigurableProductVariants.projector(products, appliedAttributesEntities, { id: props.id });
			if(matchingVariants.length === 1) return matchingVariants[0].price.toString();
			else return getMinimumPrice(matchingVariants) + '-' + getMaximumPrice(matchingVariants);
		}
	);

	const selectAllConfigurableProductAttributes = createSelector(
		selectProductEntities,
		(products, props) => {
			const product = selectProduct.projector(products, { id: props.id });
			if(product.type !== DaffProductTypeEnum.Configurable) {
				return {};
			}
			return products[props.id].configurableAttributes.reduce((acc, attribute) => {
				return {
					...acc,
					[attribute.code]: attribute.values.map(value => value.value)
				};
			}, {});
		}
	);

	/**
	 * Selector for selectable configurable product attributes derived from the remaining variants and the order of currently applied attributes.
	 * The remaining variants of the product are derived from the currently applied attributes.
	 */
	const selectSelectableConfigurableProductAttributes = createSelector(
		selectProductEntities,
		selectConfigurableProductAppliedAttributesEntitiesState,
		(products, appliedAttributesEntities, props) => {
			const product = <DaffConfigurableProduct>selectProduct.projector(products, { id: props.id });
			if(product.type !== DaffProductTypeEnum.Configurable) {
				return {};
			}
			const appliedAttributes: DaffConfigurableProductEntityAttribute[] = selectConfigurableProductAppliedAttributes.projector(appliedAttributesEntities, { id: props.id });
			if(appliedAttributes.length === 0) return selectAllConfigurableProductAttributes.projector(products, { id: props.id });
			
			const selectableAttributes = initializeSelectableAttributes(product.configurableAttributes);
			let matchingVariants: DaffConfigurableProductVariant[] = product.variants;
			// Set which values of applied attribute codes should be set as selectable based on the order that they were selected
			for(let i=0; i<=appliedAttributes.length; i++) {
				matchingVariants = matchingVariants.filter(variant => isVariantAvailable(appliedAttributes.slice(0, i), variant));
				if(i<appliedAttributes.length) {
					matchingVariants.forEach(variant => {
						if(!isVariantAttributeMarkedAsSelectable(selectableAttributes[appliedAttributes[i].code], variant.appliedAttributes[appliedAttributes[i].code])) {
							selectableAttributes[appliedAttributes[i].code].push(variant.appliedAttributes[appliedAttributes[i].code]);
						}
					});
				}
			}
			
			// Set which values of the unapplied attribute codes should be set as selectable based on the matching variants of all
			// applied attributes.
			product.configurableAttributes.forEach(attribute => {
				if(!selectableAttributes[attribute.code].length) {
					matchingVariants.forEach(variant => {
						if(!isVariantAttributeMarkedAsSelectable(selectableAttributes[attribute.code], variant.appliedAttributes[attribute.code])) {
							selectableAttributes[attribute.code].push(variant.appliedAttributes[attribute.code]);
						}
					});
				}
			})
			
			return selectableAttributes;
		}
	);

	return { 
		selectAllConfigurableProductAttributes,
		selectConfigurableProductPrice,
		selectMatchingConfigurableProductVariants,
		selectSelectableConfigurableProductAttributes
	}
}

export const getDaffConfigurableProductSelectors = (() => {
	let cache;
	return (): DaffConfigurableProductMemoizedSelectors => cache = cache 
		? cache 
		: createConfigurableProductSelectors();
})();

function isVariantAvailable(
	appliedAttributes: DaffConfigurableProductEntityAttribute[], 
	variant: DaffConfigurableProductVariant
): boolean {
	return appliedAttributes.reduce((acc, attribute) => 
		acc && attribute.value === variant.appliedAttributes[attribute.code],
		true
	)
}

function getMinimumPrice(variants: DaffConfigurableProductVariant[]): string {
	return variants.reduce(
		(acc, variant) => {
			const price = variant.price;
			return price < acc ? price : acc;
		},
		variants[0].price
	).toString();
}

function getMaximumPrice(variants: DaffConfigurableProductVariant[]): string {
	return variants.reduce(
		(acc, variant) => {
			const price = variant.price
			return price > acc ? price : acc;
		},
		variants[0].price
	).toString();
}

function initializeSelectableAttributes(attributes: DaffConfigurableProductAttribute[]): Dictionary<string[]> {
	return attributes.reduce((acc, attribute) => {
		return {
			...acc,
			[attribute.code]: []
		};
	}, {});
}

function isVariantAttributeMarkedAsSelectable(attributeArray: string[], variantValue: string) {
	return attributeArray.indexOf(variantValue) > -1
}
