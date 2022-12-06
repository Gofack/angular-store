import { createAction, createReducer, on } from "@ngrx/store";
import { Product } from "../interfaces/product";

export const addToCart = createAction('[Cart] Add ot cart');
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

// export const cartReducer = createReducer(
// 	initialCartState,
// 	on(addToCart, (state, action) => ({
// 		// ...state,
// 		// products: action.product
// 		const findProduct = state.products.find((obj) => obj.id === action.payload.id);
// 		if(findProduct) { }
// 	}))

// )