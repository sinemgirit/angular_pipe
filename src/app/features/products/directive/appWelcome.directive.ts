import { Directive,TemplateRef,ViewContainerRef,Input } from '@angular/core';

@Directive({
  selector: '[appAppWelcome]',
  standalone: true,
})
export class AppWelcomeDirective {
  private timeoutId: any;

  constructor(
    private templateRef: TemplateRef<any>, 
    private viewContainer: ViewContainerRef) {}

  @Input() set appWelcome(delay: number) {
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.templateRef, { $implicit: 'Welcome' });

    this.timeoutId = setTimeout(() => {
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.templateRef);
    }, delay);
  }

  ngOnDestroy() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
}
