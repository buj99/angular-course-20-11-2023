import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]',
})
export class HighlightDirectiveDirective {
  @Input() color: string = '';
  constructor(private element: ElementRef) {
    console.log(element);

    this.element.nativeElement.innerHtml =
      this.element.nativeElement.innerHtml + 'custom text';
  }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.color !== '') {
      this.element.nativeElement.style.backgroundColor = this.color;
      return;
    }
    this.element.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = '';
  }
}
