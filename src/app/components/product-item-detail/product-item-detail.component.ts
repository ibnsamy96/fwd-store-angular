import { Component, OnInit } from '@angular/core';
import { DataFetcherService } from 'src/app/Services/data-fetcher.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/types/product.interface';
import { CartManagementService } from '../../Services/cart-management.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  constructor(
    private dataFetcher: DataFetcherService,
    private activatedRoute: ActivatedRoute,
    private cartManager: CartManagementService
  ) {}
  product!: Product;

  ngOnInit(): void {
    this.activatedRoute.url.subscribe((urls) =>
      this.fetchProduct(urls[1].path)
    );
  }

  fetchProduct(prodId: number | string) {
    this.dataFetcher.getProduct(prodId).subscribe({
      next: (data: Product) => {
        this.product = { ...data };
      },
    });
  }

  addToCart(data: any) {
    const numberOfPieces = parseInt(data.numberOfPieces);
    this.cartManager.addToCart(this.product, numberOfPieces);
    alert(numberOfPieces + ' pieces of this product was added to your cart.');
  }
}
