import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizPlaceholderComponent } from './quiz-placeholder.component';

describe('QuizPlaceholderComponent', () => {
  let component: QuizPlaceholderComponent;
  let fixture: ComponentFixture<QuizPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizPlaceholderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
