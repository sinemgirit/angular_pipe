import { Directive,ElementRef,Renderer2} from '@angular/core';

@Directive({
  selector: '[appAppButton]',
  standalone: true,
})
export class AppButtonDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setStyle();
  }

  private setStyle() {
    this.renderer.addClass(this.el.nativeElement, 'app-button-style');

    
    this.renderer.listen(this.el.nativeElement, 'mouseover', () => {
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#0056b3');
    });

    this.renderer.listen(this.el.nativeElement, 'mouseout', () => {
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#007bff');
    });
  }
}
