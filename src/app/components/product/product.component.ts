import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

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
		title: ''
	};

	constructor() { }

	ngOnInit(): void {
		// console.log(this.product);
	}
}
