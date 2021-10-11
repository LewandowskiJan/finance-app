import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantEducationComponent } from './plant-education.component';

describe('PlantEducationComponent', () => {
  let component: PlantEducationComponent;
  let fixture: ComponentFixture<PlantEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantEducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
