import { Component } from '@angular/core';
import {TopbarComponent} from "../../components/topbar/topbar.component";
import {RouterOutlet} from "@angular/router";

@Component({
  standalone: true,
  imports: [
    TopbarComponent,
    RouterOutlet
  ],
  templateUrl: './shop-layout.component.html',
  styles: ``
})
export class ShopLayoutComponent {

}
