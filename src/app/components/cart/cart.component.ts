import { Component, OnInit } from '@angular/core';
import { CartManagementService } from '../../cart-management.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private cartManager: CartManagementService) {}

  cart!: any;

  ngOnInit(): void {
    this.cart = this.cartManager.getCart();
    console.log(this.cart);
  }
}
