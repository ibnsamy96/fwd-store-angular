import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/types/product.interface';
import { CartManagementService } from '../../Services/cart-management.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(
    private cartManager: CartManagementService,
    private router: Router
  ) {}

  changeableItems: { id: any; quantity: any }[] = [];

  cart: { product: Product; quantity: number }[] = [];

  ngOnInit(): void {
    this.cart = this.cartManager.getCart();
    console.log(this.cart);
  }

  updateQuantity({ id, quantity }: { id: any; quantity: any }) {
    const itemIndex = this.changeableItems.findIndex((item) => item.id === id);
    if (itemIndex >= 0) this.changeableItems[itemIndex].quantity = quantity;
    else this.changeableItems.push({ id, quantity });
  }

  saveNewQuantity() {
    console.log(this.changeableItems);
    this.changeableItems.forEach((el) => {
      this.cartManager.setQuantity(el.id, el.quantity);
    });
    alert('Quantity changed.');
    this.changeableItems = [];

    this.cart = this.cartManager.getCart();
    console.log(this.cart);
  }

  removeItem(id: any) {
    this.cartManager.removeFromCart(id);
    this.cart = this.cartManager.getCart();
  }

  submitAddress(name: any, address: any, card: any) {
    console.log({ userInfo: { name, address, card } });
    this.router.navigate(['cart', 'order-confirmed']);
  }
}
