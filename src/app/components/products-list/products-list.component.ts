import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/interfaces/product';
import { loadProductsSuccess, ProductsActionsTypes, productsSelector } from 'src/app/reducers/products';
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
	products$: Observable<Product[]> = this.store.select(productsSelector);
	category$: Observable<String> = this.store.select(categorySelector);

	constructor(
		private dataService: DataService,
		private store: Store
	) { }

	ngOnInit(): void {
		this.store.dispatch({ type: ProductsActionsTypes.LoadProducts })
		// this.store.dispatch(loadProductsSuccess({ payload: [] }));
		// this.dataService.getProducts().subscribe(data => this.products = data);
	}
}
