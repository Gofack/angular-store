// import { state } from "@angular/animations";
import { createAction, createReducer, on, props, createFeatureSelector, createSelector } from "@ngrx/store";
import { IProduct } from "../interfaces/product";
import { Status } from "./types";

export const PRODUCTS_KEY = 'products';
export enum ProductsActionsTypes {
	LoadProducts = '[Products] Load Products',
	LoadProductsSuccess = '[Products] Load products success',
	LoadProductsFail = '[Products] Load products fail'
}
export const loadProducts = createAction(ProductsActionsTypes.LoadProducts);
export const loadProductsSuccess = createAction(ProductsActionsTypes.LoadProductsSuccess, props<{ payload: IProduct[] }>());
export const loadProductsFailure = createAction(ProductsActionsTypes.LoadProductsFail, props<{ error: any }>());

export interface ProductsData {
	// loading: boolean;
	products: IProduct[];
	status: Status
	// error?: string | null;
}

// export interface ProductsState {
// 	readonly products: ProductsData
// }

export const initialProductsState: ProductsData = {
	// loading: false,
	products: [],
	status: Status.LOADING,
	// error: ''
}

export const productsReducer = createReducer(
	initialProductsState,
	on(loadProducts, state => ({
		...state,
		status: Status.LOADING,
		// error: null
	})),
	on(loadProductsSuccess, (state, { payload: products }) => ({
		...state,
		products: products,
		// loaded: true
		status: Status.SUCCESS,
		// error: null
	})),
	on(loadProductsFailure, (state, { error }) => ({
		...state,
		status: Status.ERROR,
		// error
	}))
)

export const productsFeatureSelector = createFeatureSelector<ProductsData>(PRODUCTS_KEY);
export const productsSelector = createSelector(productsFeatureSelector, state => state.products);
export const productsStatusSelector = createSelector(productsFeatureSelector, state => state.status);