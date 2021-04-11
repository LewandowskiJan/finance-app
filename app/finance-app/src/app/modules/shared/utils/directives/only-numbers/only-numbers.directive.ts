import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyNumbers]',
})
export class OnlyNumbersDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event) {
    const initialValue = this.el.nativeElement.value;

    this.el.nativeElement.value = this.testValue(initialValue) ? initialValue : initialValue.substring(0, initialValue.length - 1);

    if (initialValue !== this.el.nativeElement.value) {
      event.stopPropagation();
    }
  }

  public testValue(value): boolean {
    const regExp: RegExp = new RegExp('^([1-9]{1}([0-9]{1,7})?(:?[.][0-9]{0,4})?)?$');
    return regExp.test(value);
  }
}
