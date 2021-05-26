import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AnimationGraphComponent } from './animation-graph.component';

import 'jest';

describe('AnimationGraphComponent', () => {
  let component: AnimationGraphComponent;
  let fixture: ComponentFixture<AnimationGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnimationGraphComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
