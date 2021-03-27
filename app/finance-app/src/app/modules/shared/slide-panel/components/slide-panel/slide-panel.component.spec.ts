import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { SlidePanelComponent } from './slide-panel.component';

describe('SlidePanelComponent', () => {
  let component: SlidePanelComponent;
  let store: MockStore;
  let fixture: ComponentFixture<SlidePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SlidePanelComponent],
      imports: [NoopAnimationsModule],
      providers: [provideMockStore()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidePanelComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();

    spyOn(store, 'dispatch');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
