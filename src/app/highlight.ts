import {
  Directive,
  ElementRef,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class Highlight {

  constructor(private element: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {

    this.element.nativeElement.style.backgroundColor = '#fff3cd';

  }

  @HostListener('mouseleave')
  onMouseLeave() {

    this.element.nativeElement.style.backgroundColor = 'white';

  }
}