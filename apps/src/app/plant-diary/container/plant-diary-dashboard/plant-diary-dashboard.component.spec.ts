import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantDiaryDashboardComponent } from './plant-diary-dashboard.component';

describe('PlantDiaryDashboardComponent', () => {
  let component: PlantDiaryDashboardComponent;
  let fixture: ComponentFixture<PlantDiaryDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantDiaryDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantDiaryDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
