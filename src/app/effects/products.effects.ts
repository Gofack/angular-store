import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DataService } from "../services/data.service";
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of, EMPTY } from "rxjs";
import { loadProducts } from "../reducers/products";
import { IProduct } from "../interfaces/product";
import * as ProductActions from '../reducers/products';
import { ProductsActionsTypes } from "../reducers/products";
import { setSorting } from "../reducers/sort";
import { setCategory } from "../reducers/categories";

@Injectable()
export class ProductsEffects {
	products$ = createEffect(() => this.actions$.pipe(
		ofType(ProductsActionsTypes.LoadProducts),
		mergeMap(() =>
			this.dataService.getProducts().pipe(
				map(
					(products: IProduct[]) =>
						ProductActions.loadProductsSuccess({ payload: products })
				),
				// catchError((error) => of(ProductActions.loadProductsFailure({ error })))
				catchError(() => EMPTY)
			)
		),
	));

	productsSorted$ = createEffect(() => this.actions$.pipe(
		ofType(setSorting),
		mergeMap((action) => {
			let key = '';
			if (action.sorting === 'A-Z') key = 'asc';
			if (action.sorting === 'Z-A') key = 'desc';
			return this.dataService.getProducts(key).pipe(
				map(
					(products: IProduct[]) =>
						ProductActions.loadProductsSuccess({ payload: products })
				),
				catchError((error) => of(ProductActions.loadProductsFailure({ error })))
				// catchError(() => EMPTY)
			)
		}
		),
	));

	setCategory$ = createEffect(() => this.actions$.pipe(
		ofType(setCategory),
		mergeMap((action) => {
			if (action.category === 'all') {
				return this.dataService.getProducts().pipe(
					map(
						(products: IProduct[]) =>
							ProductActions.loadProductsSuccess({ payload: products })
					),
					catchError((error) => of(ProductActions.loadProductsFailure({ error })))
					// catchError(() => EMPTY)
				)
			} else {
				return this.dataService.getProductCategory(action.category).pipe(
					map(
						(products: IProduct[]) =>
							ProductActions.loadProductsSuccess({ payload: products })
					),
					catchError((error) => of(ProductActions.loadProductsFailure({ error })))
					// catchError(() => EMPTY)
				)
			}
		}
		),
	));

	constructor(
		private actions$: Actions,
		private dataService: DataService
	) { }

}