import { Component, OnInit } from '@angular/core';
import { DataFetcherService } from '../../Services/data-fetcher.service';
import { Product } from '../../types/product.interface';
import { CartManagementService } from '../../Services/cart-management.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private dataFetcher: DataFetcherService,
    private cartManager: CartManagementService
  ) {}

  ngOnInit(): void {
    this.dataFetcher.getAllProducts().subscribe({
      next: (data: Product[]) => {
        this.products = [...data];
      },
    });
  }

  addToCart(data: any, product: Product) {
    const numberOfPieces = parseInt(data.numberOfPieces);
    this.cartManager.addToCart(product, numberOfPieces);
    alert(numberOfPieces + ' pieces of this product was added to your cart.');
  }
}
