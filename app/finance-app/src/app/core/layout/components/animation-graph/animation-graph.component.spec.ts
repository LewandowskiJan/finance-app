import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationGraphComponent } from './animation-graph.component';

describe('AnimationGraphComponent', () => {
  let component: AnimationGraphComponent;
  let fixture: ComponentFixture<AnimationGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimationGraphComponent ]
    })
    .compileComponents();
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
