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
    this.message = "Player Two Won";
    this.connectFourGame.playerMoves.undoMove();
    this.connectFourGame.setCurrentStateToOtherPlayer("player one");
  }

  redoMove(): void {
  }

  resetGame(): void {
    this.connectFourGame.resetGame();
  }
}
