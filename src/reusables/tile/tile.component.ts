import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.scss'
})
export class TileComponent {
  @Input() text: string = '';
  @Input() isSelected: boolean = false;
  @Input() isSuccess: boolean = false;

  @Output('isSelected') selectionChanged = new EventEmitter<boolean>();

  public onClick() {
    this.isSelected = !this.isSelected;
    this.selectionChanged.emit(this.isSelected);
  }
}
