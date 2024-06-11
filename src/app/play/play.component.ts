import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { QuizEntry } from '../../models/quiz-entry';
import { Result } from '../../models/result';
import { Router } from '@angular/router';
import { TileState } from '../../reusables/tile/tile.component';
import { ReusablesModule } from '../../reusables/reusables.module';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-play',
  standalone: true,
  imports: [ReusablesModule],
  templateUrl: './play.component.html',
  styleUrl: './play.component.scss'
})
export class PlayComponent implements OnInit {
  question: Array<QuizEntry> = []
  currentIndex: number = 0;
  totalQuestions: number;

  private game: Game;

  constructor(public router: Router, public gameService: GameService) {
    gameService.createNewGame();
    this.game = gameService.game;
    this.totalQuestions = this.game.totalQuestions;
  }

  ngOnInit(): void {
    this.question = this.game.getQuestion(0)
  }

  onSelected(state: TileState) {
    if (state.state === Result.unset)
      this.question = this.game.setAnswer(state.text);
    else
      this.question = this.game.resetAnswer();
  }

  moved(direction: 1 | -1) {
    if (this.currentIndex + direction >= 0 && this.currentIndex + direction < this.totalQuestions)
      this.currentIndex += direction;
    this.question = this.game.getQuestion(direction)
  }

  reset() {
    this.question = this.game.resetAll();
  }

  finish() {
    this.router.navigateByUrl("/result")
  }
}
