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
    this.message = "Draw";
    this.connectFourGame.playerMoves.undoMove();
    this.connectFourGame.setCurrentStateToOtherPlayer(this.connectFourGame.playerMoves.undoMoves[0].currentPlayer);
  }

  redoMove(): void {
  }

  resetGame(): void {
    this.connectFourGame.resetGame();
  }
}
