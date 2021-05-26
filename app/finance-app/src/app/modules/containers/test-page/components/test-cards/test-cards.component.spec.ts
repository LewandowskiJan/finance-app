import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCardsComponent } from './test-cards.component';

import 'jest';

describe('TestCardsComponent', () => {
  let component: TestCardsComponent;
  let fixture: ComponentFixture<TestCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestCardsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
