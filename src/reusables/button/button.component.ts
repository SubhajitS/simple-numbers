import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() btnType: string = '';//Number/Forward/Backward
  @Input() text: string = '';
  @Input() isSelected: boolean = false;
  @Input() isSuccess: boolean = false;
  @Output('isSelected') selectionChanged = new EventEmitter<boolean>();
  @Output('moved') moved = new EventEmitter<number>();

  public onClick() {
    this.isSelected = !this.isSelected;
    this.selectionChanged.emit(this.isSelected);
  }

  public moveForward() {
    this.moved.emit(1)
  }

  public moveBackward() {
    this.moved.emit(-1)
  }
}
