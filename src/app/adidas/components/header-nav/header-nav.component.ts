import { Component } from '@angular/core';

@Component({
  selector: 'header-nav',
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.css'
})
export class HeaderNavComponent {
  public toogleIsActive:boolean=false;

  toogleNav(){
    this.toogleIsActive = !this.toogleIsActive;
    console.log(this.toogleIsActive);
  }
}
