import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { IProduct } from 'src/app/interfaces/product';
import { addToCart } from 'src/app/reducers/cart';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
	@Input() product: IProduct = {
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
		counter: 0
	};

	constructor(
		private store: Store,
	) { }

	ngOnInit(): void {
		// console.log(this.product);
	}

	addToCart(product: IProduct) {
		this.store.dispatch(addToCart({ product }));
	}
}
