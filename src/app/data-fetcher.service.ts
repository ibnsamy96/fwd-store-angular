import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataFetcherService {
  apiLink = 'https://fakestoreapi.com';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiLink + '/products/');
  }

  getProduct(id: number | string): Observable<Product> {
    return this.http.get<Product>(this.apiLink + '/products/' + id);
  }

  getAllCategories() {
    return this.http.get(this.apiLink + '/products/categories/');
  }

  getProductsOfCategory(categoryName: string) {
    return this.http.get(this.apiLink + '/products/category/' + categoryName);
  }
}
