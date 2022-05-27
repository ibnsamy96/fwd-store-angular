import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product.interface';

@Pipe({
  name: 'sumPrices',
  pure: false,
})
export class SumPricesPipe implements PipeTransform {
  transform(value: { product: Product; quantity: number }[]): number {
    return value.reduce((acc, item) => {
      return acc + item.product.price * item.quantity;
    }, 0);
  }
}
