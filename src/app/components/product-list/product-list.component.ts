import { Component, OnInit } from '@angular/core';
import { DataFetcherService } from '../../data-fetcher.service';
import { Product } from '../../product.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private dataFetcher: DataFetcherService) {}

  ngOnInit(): void {
    this.dataFetcher.getAllProducts().subscribe({
      next: (data: Product[]) => {
        this.products = [...data];
      },
    });
  }

  addToCart(data: any) {
    console.log('added to cart');
    console.log(data);
  }
}
