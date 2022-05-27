import { Injectable } from '@angular/core';
import { Product } from '../types/product.interface';

@Injectable({
  providedIn: 'root',
})
export class CartManagementService {
  userCart: { product: Product; quantity: number }[];

  constructor() {
    this.userCart = this.readFromLocalStorage() || [];
  }

  getCart() {
    return this.userCart;
  }

  addToCart(product: Product, quantity: number | string) {
    const productIndexInCart = this.userCart.findIndex(
      (item) => item.product.id === product.id
    );
    if (productIndexInCart >= 0)
      this.userCart[productIndexInCart].quantity += parseInt(
        quantity as unknown as string
      );
    else this.userCart.push({ product, quantity: 1 });

    this.saveToLocalStorage();
  }

  setQuantity(productId: string | number, quantity: string | number) {
    const productIndexInCart = this.userCart.findIndex(
      (item) => item.product.id === productId
    );
    if (productIndexInCart >= 0)
      this.userCart[productIndexInCart].quantity = parseInt(
        quantity as unknown as string
      );

    this.saveToLocalStorage();
  }

  removeFromCart(productId: string | number) {
    const productIndexInCart = this.userCart.findIndex(
      (item) => item.product.id === productId
    );
    if (productIndexInCart >= 0) this.userCart.splice(productIndexInCart, 1);
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.userCart));
  }
  readFromLocalStorage() {
    return JSON.parse(localStorage.getItem('cart') as unknown as string);
  }
}
