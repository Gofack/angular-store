import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { sortingSelector, setSorting } from 'src/app/reducers/sort';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-sort',
	templateUrl: './sort.component.html',
	styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {
	public dropdownOpen: boolean = false;
	public sortingItems = ['rating', 'price', 'A-Z', 'Z-A'];
	sorting$: Observable<String> = this.store.select(sortingSelector);


	constructor(private store: Store) { }

	ngOnInit(): void {
	}

	toggleDropdown() {
		this.dropdownOpen = !this.dropdownOpen;
	}

	clickOutside() {
		this.dropdownOpen = false;
	}

	setSorting(sortName: string) {
		this.store.dispatch(setSorting({ sorting: sortName }));
	}
}
