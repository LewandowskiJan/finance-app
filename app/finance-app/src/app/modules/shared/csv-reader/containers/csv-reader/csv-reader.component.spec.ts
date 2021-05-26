import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { provideMockStore } from '@ngrx/store/testing';

import { CsvReaderComponent } from './csv-reader.component';

describe('CsvReaderComponent', () => {
  let component: CsvReaderComponent;
  let fixture: ComponentFixture<CsvReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CsvReaderComponent],
      imports: [HttpClientTestingModule],
      providers: [provideMockStore()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
