import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { AccountContainerComponent } from './account-container.component';

import 'jest';

describe('AccountContainerComponent', () => {
  let component: AccountContainerComponent;
  let fixture: ComponentFixture<AccountContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountContainerComponent],
      imports:[RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
