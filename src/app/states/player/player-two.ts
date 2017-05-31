import {ConnectFourGame} from "../../shared/connect-four-game";
import {Player} from "./player";

export class PlayerTwo extends Player implements State {
  message: string;
  messageColor: string;

  constructor(connectFourGame: ConnectFourGame) {
    super(connectFourGame, "player two");
    this.messageColor = "blue";
    this.message = "Player Two's Turn";
  }

}
