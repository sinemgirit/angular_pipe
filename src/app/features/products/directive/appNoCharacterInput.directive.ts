import { Directive,HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appAppNoCharacterInput]',
  standalone: true,
})
export class AppNoCharacterInputDirective {

  constructor(private ngControl: NgControl) {}

  @HostListener('input', ['$event'])
  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const initialValue = input.value;

    // Sayı karakterlerini kaldır
    input.value = initialValue.replace(/[0-9]/g, '');

    // Form kontrolünün değerini güncelle
    if (this.ngControl.control) {
      this.ngControl.control.setValue(input.value, { emitEvent: false });
    }

    // Değer değişikliği olayını tetikle
    event.stopImmediatePropagation();
  }
}
