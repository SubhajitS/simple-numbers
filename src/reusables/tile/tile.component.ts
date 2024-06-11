import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Result } from '../../models/result';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.scss'
})
export class TileComponent {
  @Input() text: number = 0;
  @Input() state: Result = Result.off

  @Output() stateChange = new EventEmitter<TileState>();

  public onClick() {
    switch(this.state) {
      case Result.off:
        this.state = Result.unset
        break;
      case Result.right:
      case Result.wrong:
        this.state = Result.off
    }
    this.stateChange.emit(new TileState(this.text, this.state));
  }
}

export class TileState {
  text: number;
  state: Result

  constructor(text: number, state: Result) {
    this.text = text
    this.state = state
  }
}