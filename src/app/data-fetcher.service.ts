import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataFetcherService {
  apiLink = 'https://fakestoreapi.com';

  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get(this.apiLink + '/products/');
  }

  getProduct(id: string) {
    return this.http.get(this.apiLink + '/products/' + id);
  }

  getAllCategories() {
    return this.http.get(this.apiLink + '/products/categories/');
  }

  getProductsOfCategory(categoryName: string) {
    return this.http.get(this.apiLink + '/products/category/' + categoryName);
  }
}
