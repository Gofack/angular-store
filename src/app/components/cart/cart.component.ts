import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/interfaces/product';
import { cartProductsSelector, cartTotalCountSelector, cartTotalPriceSelector, clearCart } from 'src/app/reducers/cart';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
	products$: Observable<IProduct[]> = this.store.select(cartProductsSelector);
	totalCount$: Observable<number> = this.store.select(cartTotalCountSelector);
	totalPrice$: Observable<number> = this.store.select(cartTotalPriceSelector);

	constructor(
		private store: Store
	) { }

	ngOnInit(): void {
	}

	clearCart() {
		if (window.confirm('Clear your cart?')) this.store.dispatch(clearCart());
	}

}
