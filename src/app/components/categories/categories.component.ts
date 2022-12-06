import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { categorySelector, setCategory } from 'src/app/reducers/categories';

@Component({
	selector: 'app-categories',
	templateUrl: './categories.component.html',
	styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
	categories: [] = [];
	category$: Observable<String> = this.store.select(categorySelector);

	constructor(
		private dataService: DataService,
		private store: Store
	) { }

	ngOnInit(): void {
		this.dataService.getCategories().subscribe(data => this.categories = data);
	}

	setCategory(category: string) {
		this.store.dispatch(setCategory({ category: category }))
	}
}
