import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'navbar-black',
  templateUrl: './navbar-black.component.html',
  styleUrl: './navbar-black.component.css'
})
export class NavbarBlackComponent implements OnInit{

  public classAnimation:string='ocultar';
  public parrafoVisible:boolean = false;


  public contenidoActual:string = 'Quieres conocer mas sobre Adidas?'


  ngOnInit() {
    this.iniciarAnimacion();
  }

  iniciarAnimacion() {
    setTimeout(() => {
      this.parrafoVisible = true;
      this.classAnimation = 'fade-in';
    }, 0);
  }

  onTransitionEnd() {
    if (this.classAnimation === 'fade-in') {
      setTimeout(() => {
        this.classAnimation = 'ocultar';
        this.parrafoVisible = false;
        this.contenidoActual = this.contenidoActual === 'Quieres conocer mas sobre Adidas?' ? 'Descuentos que arden!!' : 'Quieres conocer mas sobre Adidas?';
        setTimeout(() => {
          this.iniciarAnimacion();
        }, 100); // Espera 100ms antes de iniciar la próxima animación
      }, 2000); // Tiempo que el párrafo permanece visible antes de desvanecerse
    }

}



}
