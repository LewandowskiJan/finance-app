import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BalanceResultComponent } from './balance-result.component';

describe('BalanceResultComponent', () => {
  let component: BalanceResultComponent;
  let fixture: ComponentFixture<BalanceResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BalanceResultComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
