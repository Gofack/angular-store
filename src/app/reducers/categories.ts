import { createAction, createReducer, props, on, createFeatureSelector, createSelector } from "@ngrx/store";

export const CATEGORY_KEY = 'category';
export const initCategory = createAction('[Category] Init category');
export const setCategory = createAction('[Category] Set category', props<{ category: string }>());

export interface Category {
	category: string
}

export const initialCategory: Category = {
	category: 'all'
}

export const categoryReducer = createReducer(
	initialCategory,
	on(setCategory, (state, action) => ({
		...state,
		category: action.category
	}))
)

export const categoryFeatureSelector = createFeatureSelector<Category>(CATEGORY_KEY);
export const sortingSelector = createSelector(categoryFeatureSelector, state => state.category)