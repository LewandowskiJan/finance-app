import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { TransfersContainerComponent } from './transfers-container.component';

describe('TransferContainerComponent', () => {
  let component: TransfersContainerComponent;
  let fixture: ComponentFixture<TransfersContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransfersContainerComponent],
      imports: [RouterTestingModule],
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
