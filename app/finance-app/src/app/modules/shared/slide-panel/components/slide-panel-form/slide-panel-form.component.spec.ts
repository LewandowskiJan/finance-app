import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '../../../material/material.module';
import { SlidePanelServiceMock } from '../../services/fixture/slide-panel.service.mock';
import { SlidePanelService } from '../../services/slide-panel.service';

import { SlidePanelFormComponent } from './slide-panel-form.component';


import {} from 'jasmine';

describe('SlidePanelFormComponent', () => {
  let component: SlidePanelFormComponent;
  let fixture: ComponentFixture<SlidePanelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SlidePanelFormComponent],
      imports: [MaterialModule, NoopAnimationsModule, ReactiveFormsModule, FormsModule],
      providers: [FormBuilder, { provide: SlidePanelService, useClass: SlidePanelServiceMock }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidePanelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
