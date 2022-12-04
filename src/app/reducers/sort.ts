import { createAction, createReducer, on, props, createFeatureSelector, createSelector } from "@ngrx/store";

export const SORTING_KEY = 'sorting';
export const initSorting = createAction('[Sorting] Init Sorting');
export const setSorting = createAction('[Sorting] Set sorting', props<{ sorting: string }>());

export interface SortState {
	sorting: string;
}

export const initialSorting: SortState = {
	sorting: 'rating'
}

export const sortingReducer = createReducer(
	initialSorting,
	on(setSorting, (state, action) => ({
		...state,
		sorting: action.sorting
	}))
);

export const sortingFeatureSelector = createFeatureSelector<SortState>(SORTING_KEY);
export const sortingSelector = createSelector(sortingFeatureSelector, state => state.sorting)