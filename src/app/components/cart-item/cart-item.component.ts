import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { IProduct } from 'src/app/interfaces/product';
import { addToCart, removeFromCart, removeItemFromCart } from 'src/app/reducers/cart';

@Component({
	selector: 'app-cart-item',
	templateUrl: './cart-item.component.html',
	styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
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
		private store: Store
	) {

	}

	ngOnInit(): void {
		// console.log(this.product);
	}

	addToCart(product: IProduct) {
		this.store.dispatch(addToCart({ product }));
	}

	removeFromCart(product: IProduct) {
		this.store.dispatch(removeFromCart({ product }))
	}

	removeItemFromCart(product: IProduct) {
		if (window.confirm('Remove it from your cart?')) this.store.dispatch(removeItemFromCart({ product }));
	}
}
