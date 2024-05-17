import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdidasRoutingModule } from './adidas-routing.module';
import { LayoutPageComponent } from './layout-page/layout-page.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { NavbarBlackComponent } from './components/navbar-black/navbar-black.component';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';


@NgModule({
  declarations: [

  
    LayoutPageComponent,
         SideMenuComponent,
         NavbarBlackComponent,
         HeaderNavComponent
  ],
  imports: [
    CommonModule,
    AdidasRoutingModule
  ]
})
export class AdidasModule { }
