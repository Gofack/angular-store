// import { state } from "@angular/animations";
import { createAction, createReducer, on, props, createFeatureSelector, createSelector } from "@ngrx/store";
import { Product } from "../interfaces/product";

export const PRODUCTS_KEY = 'products';
export enum ProductsActionsTypes {
	LoadProducts = '[Products] Load Products',
	LoadProductsSuccess = '[Products] Load products success',
	LoadProductsFail = '[Products] Load products fail'
}
export const loadProducts = createAction(ProductsActionsTypes.LoadProducts);
export const loadProductsSuccess = createAction(ProductsActionsTypes.LoadProductsSuccess, props<{ payload: Product[] }>());
export const loadProductsFailure = createAction(ProductsActionsTypes.LoadProductsFail, props<{ error: any }>());

export interface ProductsData {
	// loading: boolean;
	products: Product[];
	// error?: string | null;
}

// export interface ProductsState {
// 	readonly products: ProductsData
// }

export const initialProductsState: ProductsData = {
	// loading: false,
	products: [],
	// error: ''
}

export const productsReducer = createReducer(
	initialProductsState,
	// on(loadProducts, state => ({
	// 	...state,
	// 	loaded: false,
	// 	error: null
	// })),
	on(loadProductsSuccess, (state, { payload: products }) => ({
		...state,
		products: products,
		// loaded: true
	})),
	// on(loadProductsFailure, (state, { error }) => ({
	// 	...state,
	// 	error
	// }))
)

export const productsFeatureSelector = createFeatureSelector<ProductsData>(PRODUCTS_KEY);
export const productsSelector = createSelector(productsFeatureSelector, state => state.products)