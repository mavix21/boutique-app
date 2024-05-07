import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'app',
    loadChildren: () => import('./core/shop/shop.routes').then(m => m.SHOP_ROUTES),
  },
  {
    path: '**',
    redirectTo: 'app'
  }
];
