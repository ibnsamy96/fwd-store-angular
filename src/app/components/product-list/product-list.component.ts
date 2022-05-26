import { Component, OnInit } from '@angular/core';
import { DataFetcherService } from '../../data-fetcher.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: { title: string }[] = [];

  constructor(private dataFetcher: DataFetcherService) {}

  ngOnInit(): void {
    this.dataFetcher.getAllProducts().subscribe({
      next: (data: any) => {
        this.products = [...data];
      },
    });
  }
}
