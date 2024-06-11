import { NgModule } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TileComponent } from './tile/tile.component';



@NgModule({
  declarations: [ButtonComponent, TileComponent],
  imports: [
    CommonModule,
    NgClass
  ],
  exports: [ButtonComponent, TileComponent]
})
export class ReusablesModule { }
