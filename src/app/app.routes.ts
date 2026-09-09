import { Routes } from '@angular/router';
import { Catalog } from './pages/catalog/catalog';
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
    path: '**',
    redirectTo: ''
  }
];