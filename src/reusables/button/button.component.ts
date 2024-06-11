import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() disabled: boolean = false;
  @Output() buttonClick = new EventEmitter<void>();

  public onClick() {
    this.buttonClick.emit()
  }
}
