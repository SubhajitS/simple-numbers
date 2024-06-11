import { Component, OnInit } from '@angular/core';
import { ConfettiService } from '../../services/confetti.service';
import { ReusablesModule } from '../../reusables/reusables.module';
import { Router } from '@angular/router';
import { GameService } from '../../services/game.service';
import { Outcome } from '../../models/outcome';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [ReusablesModule],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent implements OnInit{
  result: Outcome | undefined;

  constructor(public confettiService: ConfettiService, public gameService: GameService, public router: Router) {}

  ngOnInit(): void {
    this.confettiService.celebrate();
    this.result = this.gameService.game.getResult();
  }

  play() {
    this.router.navigateByUrl("/play")
  }
}
