import { NgModule } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { QuizPlaceholderComponent } from './quiz-placeholder/quiz-placeholder.component';
import { TileComponent } from './tile/tile.component';



@NgModule({
  declarations: [ButtonComponent, QuizPlaceholderComponent, TileComponent],
  imports: [
    CommonModule,
    NgClass
  ],
  exports: [QuizPlaceholderComponent]
})
export class ReusablesModule { }
