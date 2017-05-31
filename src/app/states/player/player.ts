import {ConnectFourGame} from "../../shared/connect-four-game";
import {Board} from "../../shared/board";
import {WinDetections} from "../win/win-detections/win-detections";

export abstract class Player {
  connectFourGame: ConnectFourGame;
  currentPlayer: string;
  board: Board;
  winDetections: WinDetections;

  constructor(connectFourGame: ConnectFourGame, currentPlayer: string) {
    this.connectFourGame = connectFourGame;
    this.board = this.connectFourGame.board;
    this.currentPlayer = currentPlayer;
    this.winDetections = new WinDetections(this.board);
  }

  dropDisc(columnIndex: number): void {
    if (this.board.checkForValidMove(columnIndex)) {
      this.board.playDisc(columnIndex, this.currentPlayer);
      this.setStateOfGame(columnIndex, this.board.lastDiscPlayed.y);
    }
  }

  setStateOfGame(x: number, y: number): void {
    if (this.winDetections.playerWon(x, y)) this.connectFourGame.setCurrentStateToWin(this.currentPlayer);
    else if (this.board.isDraw()) this.connectFourGame.setCurrentStateToDraw();
    else this.connectFourGame.setCurrentStateToOtherPlayer(this.currentPlayer);
  }

  resetGame(): void {
    this.connectFourGame.resetGame();
  }

}
