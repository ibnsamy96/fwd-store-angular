import { Component, OnInit } from '@angular/core';
import { CartManagementService } from '../../cart-management.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  constructor(private cartManager: CartManagementService) {}

  ngOnInit(): void {
    // console.log(payment);
  }

  calculateUserPayment() {
    return this.cartManager.getCart().reduce((acc, item) => {
      return acc + item.product.price * item.quantity;
    }, 0);
  }
}
