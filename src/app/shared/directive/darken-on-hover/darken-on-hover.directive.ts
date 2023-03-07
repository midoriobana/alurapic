import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[DarkenOnHover]'
})

export class DarkenOnHoverDirective {

  @Input() brightness = '70%';

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('mouseover')
  darkenOn() {
    this.renderer.setStyle(this.element.nativeElement, 'filter', `brightness(${this.brightness})`);
  }
  @HostListener('mouseleave')
  darkenOff() {
    this.renderer.setStyle(this.element.nativeElement, 'filter', 'brightness(100%)');
  }
}
