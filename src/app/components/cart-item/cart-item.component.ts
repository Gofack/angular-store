import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';

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

	ngOnInit(): void {
		// console.log(this.product);
	}
}
