import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() text: string = '';
  @Output() buttonClick = new EventEmitter<void>();

  public onClick() {
    this.buttonClick.emit()
  }
}
