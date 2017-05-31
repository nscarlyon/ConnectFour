import { Component} from '@angular/core';
import {ConnectFourGame} from "./shared/connect-four-game";

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})

export class ConnectFourComponent {
  connectFourGame: ConnectFourGame;

  constructor() {
    this.connectFourGame = new ConnectFourGame();
  }
}

