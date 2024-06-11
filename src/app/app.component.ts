import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReusablesModule } from '../reusables/reusables.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReusablesModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'simple-number-app';
}
