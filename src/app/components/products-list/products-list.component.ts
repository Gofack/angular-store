import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IProduct } from 'src/app/interfaces/product';
import { loadProductsSuccess, ProductsActionsTypes, productsSelector, productsStatusSelector } from 'src/app/reducers/products';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { categorySelector } from 'src/app/reducers/categories';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
	// products: Product[] = [];
	products$: Observable<IProduct[]> = this.store.select(productsSelector);
	category$: Observable<String> = this.store.select(categorySelector);
	status$: Observable<String> = this.store.select(productsStatusSelector);

	constructor(
		// private dataService: DataService,
		private store: Store
	) { }

	ngOnInit(): void {
		this.store.dispatch({ type: ProductsActionsTypes.LoadProducts })
		// this.store.dispatch(loadProductsSuccess({ payload: [] }));
		// this.dataService.getProducts().subscribe(data => this.products = data);
	}
}
