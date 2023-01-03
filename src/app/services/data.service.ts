import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../interfaces/product';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	constructor(private http: HttpClient) { }

	getProducts(sorting?: string): Observable<IProduct[]> {
		return this.http.get<IProduct[]>(`https://fakestoreapi.com/products1?sort=${sorting}`);
	}

	getSortedProducts(sortName: string): Observable<IProduct[]> {
		return this.http.get<IProduct[]>(`https://fakestoreapi.com/products?sort=${sortName}`);
	}

	getCategories(): Observable<[]> {
		return this.http.get<[]>('https://fakestoreapi.com/products/categories');
	}

	getProductCategory(category: string): Observable<IProduct[]> {
		return this.http.get<IProduct[]>(`https://fakestoreapi.com/products/category/${category}`);
	}
}
