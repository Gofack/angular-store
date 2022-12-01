import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { DataService } from 'src/app/services/data.service';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
	products: Product[] = [];

	constructor(private dataService: DataService) { }

	ngOnInit(): void {
		this.dataService.getProducts().subscribe(data => this.products = data);
	}
}
