import {ConnectFourGame} from "../../shared/connect-four-game";
import {Player} from "./player";

export class PlayerOne extends Player implements State {
  message: string;
  messageColor: string;

  constructor(connectFourGame: ConnectFourGame) {
    super(connectFourGame, "player one");
    this.message = "Player One's Turn";
    this.messageColor = "red";
  }

}
