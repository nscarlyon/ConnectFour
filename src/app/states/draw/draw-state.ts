import {ConnectFourGame} from "../../shared/connect-four-game";

export class DrawState implements State {
  message: string;
  messageColor: string;
  connectFourGame: ConnectFourGame;

  constructor(connectFourGame: ConnectFourGame) {
    this.message = "Draw";
    this.messageColor = "black";
    this.connectFourGame = connectFourGame;
  }

  dropDisc(): void {
    this.message = "Please start a new game.";
    this.messageColor = "black";
  }

  undoMove(): void {
  }

  resetGame(): void {
    this.connectFourGame.resetGame();
  }
}
