import {Routes} from "@angular/router";
import {ShopLayoutComponent} from "./pages/shop-layout/shop-layout.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";

export const SHOP_ROUTES: Routes = [
  {
    path: '',
    component: ShopLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomePageComponent
      }
    ]
  }
];
