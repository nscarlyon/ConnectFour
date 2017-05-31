import {ConnectFourGame} from "../../shared/connect-four-game";

export class PlayerOneWinState implements State {
  message: string;
  messageColor: string;
  connectFourGame: ConnectFourGame;

  constructor(connectFourGame: ConnectFourGame) {
    this.message = "Player One Won";
    this.messageColor = "red";
    this.connectFourGame = connectFourGame;
  }

  dropDisc(): void {
    this.message = "Please start a new game.";
    this.messageColor = "black";
  }

  resetGame(): void {
    this.connectFourGame.resetGame();
  }
}
