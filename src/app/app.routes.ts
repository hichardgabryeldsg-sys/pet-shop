import { Routes } from '@angular/router';
import { Catalog } from './pages/catalog/catalog';
import { CartPage } from './pages/cart/cart';
import { ProductDetail } from './pages/product-detail/product-detail';

export const routes: Routes = [
  {
    path: '',
    component: Catalog
  },
  {
    path: 'product/:id',
    component: ProductDetail
  },
  {
    path: 'catalog',
    component: Catalog
  },
  {
    path: 'cart',
    component: CartPage
  },
  {
    path: '**',
    redirectTo: ''
  }
];