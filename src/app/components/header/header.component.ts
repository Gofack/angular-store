import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { cartTotalCountSelector, cartTotalPriceSelector } from 'src/app/reducers/cart';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	totalCount$: Observable<number> = this.store.select(cartTotalCountSelector);
	totalPrice$: Observable<number> = this.store.select(cartTotalPriceSelector);

	constructor(
		private store: Store
	) { }

	ngOnInit(): void {
	}

}
