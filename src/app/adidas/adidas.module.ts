import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdidasRoutingModule } from './adidas-routing.module';
import { LayoutPageComponent } from './layout-page/layout-page.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { NavbarBlackComponent } from './components/navbar-black/navbar-black.component';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { HeroImageComponent } from './components/hero-image/hero-image.component';
import { SlideImgComponent } from './components/slide-img/slide-img.component';
import { DeskopNavMenuComponent } from './components/deskop-nav-menu/deskop-nav-menu.component';
import { DeskopMenuComponentModule } from './components/deskop-nav-menu/deskop-menu-component.module';


@NgModule({
  declarations: [


        LayoutPageComponent,
        SideMenuComponent,
        NavbarBlackComponent,
         HeaderNavComponent,
         HeroImageComponent,
         SlideImgComponent,
         DeskopNavMenuComponent
  ],
  imports: [
    CommonModule,
    AdidasRoutingModule,
    DeskopMenuComponentModule,
  ]
})
export class AdidasModule { }
