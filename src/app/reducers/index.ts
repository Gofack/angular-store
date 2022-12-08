import { isDevMode } from '@angular/core';
import {
	ActionReducer,
	ActionReducerMap,
	createFeatureSelector,
	createSelector,
	MetaReducer
} from '@ngrx/store';
import { sortingReducer, SortState, SORTING_KEY } from './sort';
import { productsReducer, ProductsData, PRODUCTS_KEY } from './products';
import { Category, categoryReducer, CATEGORY_KEY } from './categories';
import { Cart, cartReducer, CART_KEY } from './cart';

export interface State {
	[SORTING_KEY]: SortState
	[PRODUCTS_KEY]: ProductsData
	[CATEGORY_KEY]: Category
	[CART_KEY]: Cart
}

export const reducers: ActionReducerMap<State> = {
	[SORTING_KEY]: sortingReducer,
	[PRODUCTS_KEY]: productsReducer,
	[CATEGORY_KEY]: categoryReducer,
	[CART_KEY]: cartReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
