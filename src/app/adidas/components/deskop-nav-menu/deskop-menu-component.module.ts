import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuSelectComponent } from './deskop-menu-component/menu-select/menu-select.component';
import { MenuInfoComponent } from './deskop-menu-component/menu-info/menu-info.component';
import { MenuUserComponent } from './deskop-menu-component/menu-user/menu-user.component';
import { DeskopNavMenuComponent } from './deskop-nav-menu.component';



@NgModule({
  declarations: [
    MenuSelectComponent,
    MenuInfoComponent,
    MenuUserComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    MenuSelectComponent,
    MenuInfoComponent,
    MenuUserComponent
  ]
})
export class DeskopMenuComponentModule { }
