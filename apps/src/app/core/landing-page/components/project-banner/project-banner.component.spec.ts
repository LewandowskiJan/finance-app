import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBannerComponent } from './project-banner.component';

import {} from 'jasmine';

describe('ProjectBannerComponent', () => {
  let component: ProjectBannerComponent;
  let fixture: ComponentFixture<ProjectBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectBannerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
