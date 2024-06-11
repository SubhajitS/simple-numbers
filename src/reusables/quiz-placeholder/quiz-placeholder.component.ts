import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-placeholder',
  templateUrl: './quiz-placeholder.component.html',
  styleUrl: './quiz-placeholder.component.scss'
})
export class QuizPlaceholderComponent implements OnInit {

  left: string = '15';
  right: string = '17';
  selectedBtn: string = ''
  isCorrect: boolean = false

  private currentIndex: number = 0;
  private tupleList: Array<Array<number>> = []

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      const first = this.getRandomArbitrary(0, 20)
      const second = this.getRandomArbitrary(0, 20)
      this.tupleList.push([first, second])
    }
    this.setQuestion(this.currentIndex)
  }

  selectedRight(isSelected: boolean) {
    if (isSelected) {
      this.selectedBtn = 'R'
      this.isCorrect = this.findAnswer(Number.parseInt(this.left), Number.parseInt(this.right))
    } else {
      this.selectedBtn = ''
    }
  }

  selectedLeft(isSelected: boolean) {
    if (isSelected) {
      this.selectedBtn = 'L'
      this.isCorrect = this.findAnswer(Number.parseInt(this.right), Number.parseInt(this.left))
    } else {
      this.selectedBtn = ''
    }
  }

  moved(direction: number) {
    if ((this.currentIndex > 0 && direction === -1) ||
      (this.currentIndex < this.tupleList.length - 1 && direction === 1)) {
      this.setQuestion(this.currentIndex + direction)
      this.reset()
    }
  }

  private setQuestion(index: number) {
    this.left = String(this.tupleList[index][0])
    this.right = String(this.tupleList[index][1])
    this.currentIndex = index
  }

  private findAnswer(smaller: Number, greater: Number): boolean {
    return greater > smaller
  }

  private getRandomArbitrary(min: number, max: number): number {
    return Math.ceil(Math.floor((Math.random() * (max - min) + min) * 100) / 100);
  }

  private reset() {
    this.selectedBtn = ''
    this.isCorrect = false
  }
}
