import { NgModule } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { QuizPlaceholderComponent } from './quiz-placeholder/quiz-placeholder.component';



@NgModule({
  declarations: [ButtonComponent, QuizPlaceholderComponent],
  imports: [
    CommonModule,
    NgClass
  ],
  exports: [ButtonComponent, QuizPlaceholderComponent]
})
export class ReusablesModule { }
