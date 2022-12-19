import { createAction, createReducer, on, createFeatureSelector, createSelector, props } from "@ngrx/store";
import { IProduct } from "../interfaces/product";

export const CART_KEY = 'cart';
export const addToCart = createAction('[Cart] Add ot cart', props<{ product: IProduct }>());
export const removeFromCart = createAction('[Cart] Remove from cart', props<{ product: IProduct }>());
export const clearCart = createAction('[Cart] Clear cart');
export const removeItemFromCart = createAction('[Cart] Remove item from cart', props<{ product: IProduct }>());

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
		if (findProduct) {
			return {
				...state,
				products: [
					...state.products.slice(0, index),
					{
						...state.products[index],
						counter: (action.product.counter || 0) + 1
					},
					...state.products.slice(index + 1)
				],
				totalCount: (state.totalCount || 0) + 1,
				totalPrice: (state.totalPrice || 0) + action.product.price
			}
		}
		return {
			...state,
			products: [
				...state.products,
				{ ...action.product, counter: 1 }
			],
			totalCount: (state.totalCount || 0) + 1,
			totalPrice: (state.totalPrice || 0) + action.product.price
		}
	}),
	on(removeFromCart, (state, action) => {
		const index = state.products.map(obj => obj.id).indexOf(action.product.id);
		return {
			...state,
			products: [
				...state.products.slice(0, index),
				{
					...state.products[index],
					counter: action.product.counter > 1 ? (action.product.counter || 0) - 1 : 1
				},
				...state.products.slice(index + 1)
			],
			totalCount: action.product.counter > 1 ? (state.totalCount || 0) - 1 : (state.totalCount || 0) - 0,
			totalPrice: action.product.counter > 1 ? (state.totalPrice || 0) - action.product.price : (state.totalPrice || 0) - 0
		}
	}),
	on(removeItemFromCart, (state, action) => {
		const findProduct = state.products.find((obj) => obj.id === action.product.id);
		if (findProduct) {
			return {
				...state,
				products: [
					...state.products.filter(el => el.id !== action.product.id)
				],
				totalCount: state.totalCount - action.product.counter,
				totalPrice: state.totalPrice - (action.product.counter * action.product.price)
			}
		}
		return state;
	}),
	on(clearCart, () => {
		return {
			products: [],
			totalCount: 0,
			totalPrice: 0
		}
	})
)

export const cartFeatureSelector = createFeatureSelector<Cart>(CART_KEY);
export const cartProductsSelector = createSelector(cartFeatureSelector, state => state.products)
export const cartTotalCountSelector = createSelector(cartFeatureSelector, state => state.totalCount)
export const cartTotalPriceSelector = createSelector(cartFeatureSelector, state => state.totalPrice)