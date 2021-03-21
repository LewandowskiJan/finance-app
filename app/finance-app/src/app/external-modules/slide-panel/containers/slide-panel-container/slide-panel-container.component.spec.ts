import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidePanelContainerComponent } from './slide-panel-container.component';

describe('SlidePanelContainerComponent', () => {
  let component: SlidePanelContainerComponent;
  let fixture: ComponentFixture<SlidePanelContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidePanelContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidePanelContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
