import { createAction, createReducer, on, createFeatureSelector, createSelector, props } from "@ngrx/store";
import { __assign } from "tslib";
import { IProduct } from "../interfaces/product";

export const CART_KEY = 'cart';
export const addToCart = createAction('[Cart] Add ot cart', props<{ product: IProduct }>());
export const removeFromCart = createAction('[Cart] Remove from cart');
export const clearCart = createAction('[Cart] Clear cart');

export interface Cart {
	products: IProduct[];
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
		const findProduct = state.products.find((obj) => obj.id === action.product.id);
		const index = state.products.map(obj => obj.id).indexOf(action.product.id);
		console.log(index);
		console.log(findProduct);
		console.log(action.product);
		// console.log(state.prodcts[])
		if (findProduct) {
			return Object.assign({},
				state,
				{
					products: [
						...state.products,
						// { ...findProduct, count: (findProduct.count || 0) + 1 }
						Object.assign({}, ...state.products,
							{ [index]: action.product, count: (findProduct.counter || 0) + 1 }
						)
					]
				}
			);
		}
		return Object.assign({},
			state,
			{
				products: [
					...state.products,
					{ ...action.product, counter: 1 }
				]
			}
		);
	})
)

export const cartFeatureSelector = createFeatureSelector<Cart>(CART_KEY);
export const cartProductsSelector = createSelector(cartFeatureSelector, state => state.products)
export const cartTotalCountSelector = createSelector(cartFeatureSelector, state => state.totalCount)
export const cartTotalPriceSelector = createSelector(cartFeatureSelector, state => state.totalPrice)