import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'slide-img',
  templateUrl: './slide-img.component.html',
  styleUrl: './slide-img.component.css'
})
export class SlideImgComponent {


  @ViewChild('imageContainer')
  imageContainer!: ElementRef<HTMLElement>;



  scrollLeft(){

    this.imageContainer.nativeElement.scrollBy({
      left:-this.imageContainer.nativeElement.clientWidth,
      behavior:'smooth',
    })

  }
  scrollRight(){
    this.imageContainer.nativeElement.scrollBy({
      left:this.imageContainer.nativeElement.clientWidth,
      behavior:'smooth',
    }
  )};

}
