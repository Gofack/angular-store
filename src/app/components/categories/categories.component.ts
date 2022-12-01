import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
	selector: 'app-categories',
	templateUrl: './categories.component.html',
	styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
	categories: [] = [];

	constructor(private dataService: DataService) { }

	ngOnInit(): void {
		this.dataService.getCategories().subscribe(data => this.categories = data);
	}
}
