import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLike]'
})
export class LikeDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener('click') onClicks() {
    this.likeColor('#ffc107');
  }

  private likeColor(action: string) {
    this.elementRef.nativeElement.style.color = action;
  }

}
