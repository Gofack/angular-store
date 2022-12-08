import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/interfaces/product';
import { addToCart } from 'src/app/reducers/cart';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
	@Input() product: Product = {
		category: '',
		description: '',
		id: 0,
		image: '',
		price: 0,
		rating: {
			rate: 0,
			count: 0
		},
		title: '',
		count: 0
	};

	constructor(
		private store: Store,
	) { }

	ngOnInit(): void {
		// console.log(this.product);
	}

	addToCart(product: Product) {
		this.store.dispatch(addToCart({ product }));
	}
}
