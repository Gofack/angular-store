import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-sort',
	templateUrl: './sort.component.html',
	styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {
	public dropdownOpen: boolean = false;

	constructor() { }

	ngOnInit(): void {
	}

	toggleDropdown() {
		this.dropdownOpen = !this.dropdownOpen;
	}

	clickOutside() {
		this.dropdownOpen = false;
	}
}
