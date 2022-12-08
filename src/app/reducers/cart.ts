import { createAction, createReducer, on, createFeatureSelector, createSelector, props } from "@ngrx/store";
import { __assign } from "tslib";
import { Product } from "../interfaces/product";

export const CART_KEY = 'cart';
export const addToCart = createAction('[Cart] Add ot cart', props<{ product: Product }>());
export const removeFromCart = createAction('[Cart] Remove from cart');
export const clearCart = createAction('[Cart] Clear cart');

export interface Cart {
	products: Product[];
	totalCount: number;
	totalPrice: number;
}

export const initialCartState: Cart = {
	products: [],
	totalCount: 0,
	totalPrice: 0
}

export const cartReducer = createReducer(
	initialCartState,
	on(addToCart, (state, action) => {
		// ...state,
		// products: action.product
		console.log(state.products);
		const findProduct = state.products.find((obj) => obj.id === action.product.id);
		console.log(findProduct);
		if (findProduct) {
			// findProduct.count++;
			// console.log(findProduct);
			// return Object.assign({},
			// 	state,
			// 	findProduct.count++
			// 	// {
			// 	// 	// count: action.product.count++
			// 	// 	products: [...state.products, { ...action.product, count: 3 }]
			// 	// }
			// )
			console.log(action.product);
			console.log(action.product.count);
			return Object.assign({},
				state,
				{
					products: [
						Object.assign({}, ...state.products,
							{ ...findProduct, count: (findProduct.count || 0) + 1 }
						)
					]
				}
			);
		} else {
			// console.log(action);
			// state.products.push({
			// 	...action.product,
			// 	count: 1,
			// });
			// state.products.push(action.product);
			// console.log(action.product);
			return Object.assign({},
				state,
				{
					// products: state.products.push({ ...action.product, count: 1 })
					products: [
						// Object.assign({}, ...state.products, { ...action.product, count: 1 })
						...state.products,
						{ ...action.product, count: 1 }
					]
				}
			);
		}
		// return { ...state, products: state.products.push({ ...action.product, count: 1 }) };
		// return { ...state };
	})
)

export const cartFeatureSelector = createFeatureSelector<Cart>(CART_KEY);
export const cartProductsSelector = createSelector(cartFeatureSelector, state => state.products)
export const cartTotalCountSelector = createSelector(cartFeatureSelector, state => state.totalCount)
export const cartTotalPriceSelector = createSelector(cartFeatureSelector, state => state.totalPrice)