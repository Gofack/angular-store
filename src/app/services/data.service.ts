import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	constructor(private http: HttpClient) { }

	getProducts(): Observable<Product[]> {
		return this.http.get<Product[]>('https://fakestoreapi.com/products');
	}

	getCategories(): Observable<[]> {
		return this.http.get<[]>('https://fakestoreapi.com/products/categories');
	}
}
