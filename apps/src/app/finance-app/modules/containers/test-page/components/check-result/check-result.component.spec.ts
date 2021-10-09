import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckResultComponent } from './check-result.component';

import {} from 'jasmine';

describe('CheckResultComponent', () => {
  let component: CheckResultComponent;
  let fixture: ComponentFixture<CheckResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckResultComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
