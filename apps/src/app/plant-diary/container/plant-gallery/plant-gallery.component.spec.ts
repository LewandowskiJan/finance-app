import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantGalleryComponent } from './plant-gallery.component';

describe('PlantGalleryComponent', () => {
  let component: PlantGalleryComponent;
  let fixture: ComponentFixture<PlantGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
