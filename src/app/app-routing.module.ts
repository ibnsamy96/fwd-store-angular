import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductsGalleryComponent } from './pages/products-gallery/products-gallery.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  {
    path: 'products',
    component: ProductsGalleryComponent,
  },
  { path: 'products/:id', component: ProductPageComponent },
  { path: 'cart', component: CartComponent },
  { path: 'order-confirmed', component: ConfirmationComponent },
  { path: '**', redirectTo: 'products' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
