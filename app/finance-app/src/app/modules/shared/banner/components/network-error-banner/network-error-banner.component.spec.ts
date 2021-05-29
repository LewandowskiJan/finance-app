import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { NetworkErrorBannerComponent } from './network-error-banner.component';

describe('NetworkErrorBannerComponent', () => {
  let component: NetworkErrorBannerComponent;
  let fixture: ComponentFixture<NetworkErrorBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NetworkErrorBannerComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkErrorBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
