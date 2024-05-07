import {Component, OnInit} from '@angular/core';
import {MenubarModule} from "primeng/menubar";
import {MenuItem} from "primeng/api";
import {ButtonModule} from "primeng/button";
import {StyleClassModule} from "primeng/styleclass";
import {MenuModule} from "primeng/menu";

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [
    MenubarModule,
    ButtonModule,
    StyleClassModule,
    MenuModule
  ],
  templateUrl: './topbar.component.html',
  styles: `
    :host ::ng-deep p-menubarsub,
    :host ::ng-deep .p-menubar-button {
      @apply ml-auto;
    }

    :host ::ng-deep .p-menubar-end {
      @apply ml-0 primeng-md:ml-auto;
    }

    :host ::ng-deep .p-menuitem-icon,
    :host ::ng-deep .p-button-icon {
      color: var(--primary-color);
    }
  `
})
export class TopbarComponent implements OnInit {
  items: MenuItem[] | undefined;
  userOptions: MenuItem[] | undefined;

  ngOnInit() {
    this.userOptions = [
      {
        label: 'Iniciar Sesión',
        icon: 'pi pi-fw pi-pencil',
      },
      {
        label: 'Cerrar sesión',
        icon: 'pi pi-fw pi-power-off',
      },

    ]
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: './home',
      },
      {
        label: 'Features',
        icon: 'pi pi-star'
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
          {
            label: 'Components',
            icon: 'pi pi-bolt'
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server'
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil'
          },
          {
            label: 'Templates',
            icon: 'pi pi-palette',
            items: [
              {
                label: 'Apollo',
                icon: 'pi pi-palette'
              },
              {
                label: 'Ultima',
                icon: 'pi pi-palette'
              }
            ]
          }
        ]
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope'
      }
    ]
  }
}
