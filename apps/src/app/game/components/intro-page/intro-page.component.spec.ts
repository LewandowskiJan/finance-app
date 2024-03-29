import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroPageComponent } from './intro-page.component';

import {} from 'jasmine';

describe('IntroPageComponent', () => {
  let component: IntroPageComponent;
  let fixture: ComponentFixture<IntroPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntroPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
