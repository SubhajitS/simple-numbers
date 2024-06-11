import { Injectable } from '@angular/core';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private _game!: Game;
  
  public get game() : Game {
    return this._game;
  }
  
  createNewGame() {
    this._game = new Game(10, 3, 20, 0)
  }
}
