import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportanceTagComponent } from './importance-tag.component';

describe('ImportanceTagComponent', () => {
  let component: ImportanceTagComponent;
  let fixture: ComponentFixture<ImportanceTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImportanceTagComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportanceTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
