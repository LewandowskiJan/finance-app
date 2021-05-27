import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { TestPageComponent } from './test-page.component';

import { TestConnectionService } from '../../services/test-connection.service';

import {} from 'jasmine';

describe('TestPageComponent', () => {
  let component: TestPageComponent;
  let store: MockStore;
  let fixture: ComponentFixture<TestPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestPageComponent],
      imports: [HttpClientTestingModule],
      providers: [provideMockStore(), TestConnectionService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPageComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();

    spyOn(store, 'dispatch');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
