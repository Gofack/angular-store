import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	constructor(private http: HttpClient) { }

	getProducts(sorting?: string): Observable<Product[]> {
		return this.http.get<Product[]>(`https://fakestoreapi.com/products?sort=${sorting}`);
		// return this.http.get<Product[]>(`https://fakestoreapi.com/products`);
	}

	getSortedProducts(sortName: string): Observable<Product[]> {
		return this.http.get<Product[]>(`https://fakestoreapi.com/products?sort=${sortName}`);
	}

	getCategories(): Observable<[]> {
		return this.http.get<[]>('https://fakestoreapi.com/products/categories');
	}
}
