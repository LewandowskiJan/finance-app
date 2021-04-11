import { ElementRef } from '@angular/core';

import { OnlyNumbersDirective } from './only-numbers.directive';

describe('OnlyNumbersDirective', () => {
  const nativeElement: any = { value: '' };
  const el = new ElementRef(nativeElement);
  const directive = new OnlyNumbersDirective(el);

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should return false when 0', () => {
    // given
    const value: string = '0';
    // when
    const test: boolean = directive.testValue(value);
    // then
    expect(test).toBeFalse();
  });

  it('should return false when chars', () => {
    // given
    const value: string = 'abc';
    // when
    const test: boolean = directive.testValue(value);
    // then
    expect(test).toBeFalse();
  });

  it('should return false when mixed chars, numbers', () => {
    // given
    const value: string = '123aaa';
    // when
    const test: boolean = directive.testValue(value);
    // then
    expect(test).toBeFalse();
  });

  it('should return false when more than 8 digits', () => {
    // given
    const value: string = '123456789';
    // when
    const test: boolean = directive.testValue(value);
    // then
    expect(test).toBeFalse();
  });

  it('should return false when more than 4 digits after . dot', () => {
    // given
    const value: string = '12345678.12345';
    // when
    const test: boolean = directive.testValue(value);
    // then
    expect(test).toBeFalse();
  });

  it('should return true when empty', () => {
    // given
    const value: string = '';
    // when
    const test: boolean = directive.testValue(value);
    // then
    expect(test).toBeTrue();
  });

  it('should return true when 8 digits before . dot', () => {
    // given
    const value: string = '12345678';
    // when
    const test: boolean = directive.testValue(value);
    // then
    expect(test).toBeTrue();
  });

  it('should return true when 8 digits and . dot', () => {
    // given
    const value: string = '12345678.';
    // when
    const test: boolean = directive.testValue(value);
    // then
    expect(test).toBeTrue();
  });

  it('should return true when 8 digits before . dot and 4 after', () => {
    // given
    const value: string = '12345678.1234';
    // when
    const test: boolean = directive.testValue(value);
    // then
    expect(test).toBeTrue();
  });

  it('should return true when 1 digit before . dot and 3 after', () => {
    // given
    const value: string = '1.123';
    // when
    const test: boolean = directive.testValue(value);
    // then
    expect(test).toBeTrue();
  });
});
