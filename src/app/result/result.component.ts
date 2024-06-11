import { Component, OnInit } from '@angular/core';
import { ConfettiService } from '../../services/confetti.service';
import { ReusablesModule } from '../../reusables/reusables.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [ReusablesModule],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent implements OnInit{
  constructor(public confettiService: ConfettiService, public router: Router) {}

  ngOnInit(): void {
    this.confettiService.celebrate();
  }

  play() {
    this.router.navigateByUrl("/play")
  }
}
