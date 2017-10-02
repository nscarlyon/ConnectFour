import {ConnectFourGame} from "../../shared/connect-four-game";

export class PlayerTwoWinState implements State {
  message: string;
  messageColor: string;
  connectFourGame: ConnectFourGame;

  constructor(connectFourGame: ConnectFourGame) {
    this.message = "Player Two Won";
    this.messageColor = "blue";
    this.connectFourGame = connectFourGame;
  }

  dropDisc(): void {
    this.message = "Please start a new game.";
    this.messageColor = "black";
  }

  undoMove(): void {
  }

  redoMove(): void {
  }

  resetGame(): void {
    this.connectFourGame.resetGame();
  }
}
