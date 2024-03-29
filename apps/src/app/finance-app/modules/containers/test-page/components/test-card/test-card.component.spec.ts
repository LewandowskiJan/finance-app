import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCardComponent } from './test-card.component';

import {} from 'jasmine';

describe('TestCardComponent', () => {
  let component: TestCardComponent;
  let fixture: ComponentFixture<TestCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestCardComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
