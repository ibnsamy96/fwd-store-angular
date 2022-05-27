import { Component, Input, OnInit } from '@angular/core';
import { CartManagementService } from '../../Services/cart-management.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  constructor(private cartManager: CartManagementService) {}

  @Input() userInfo!: {
    userName?: string;
    address?: string;
    card?: number;
    orderPrice?: number;
  };

  ngOnInit(): void {
    // console.log(payment);
  }

  calculateUserPayment() {
    return this.cartManager.getCart().reduce((acc, item) => {
      return acc + item.product.price * item.quantity;
    }, 0);
  }
}
