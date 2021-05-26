import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { TransfersContainerComponent } from './transfers-container.component';

import 'jest';

describe('TransferContainerComponent', () => {
  let component: TransfersContainerComponent;
  let fixture: ComponentFixture<TransfersContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransfersContainerComponent],
      imports: [RouterTestingModule, NoopAnimationsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransfersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
