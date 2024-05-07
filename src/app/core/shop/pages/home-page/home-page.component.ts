import { Component } from '@angular/core';
import {CarouselModule} from "primeng/carousel";
import {galleriaImages} from "../../data/photo-gallery";
import {GalleriaModule} from "primeng/galleria";
import {CardModule} from "primeng/card";

@Component({
  standalone: true,
  imports: [
    CarouselModule,
    GalleriaModule,
    CardModule,
  ],
  templateUrl: './home-page.component.html',
  styles: ``
})
export class HomePageComponent {
  public carouselImages = galleriaImages;
}
