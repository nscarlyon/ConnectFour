import {ConnectFourGame} from "../../shared/connect-four-game";
import {Board} from "../../shared/board";
import {WinDetections} from "../win/win-detections/win-detections";
import {PlayerMoves} from "./playerMoves";
import {PlayDiscCommand} from "./play-disc-command";

export abstract class Player {
  connectFourGame: ConnectFourGame;
  currentPlayer: string;
  board: Board;
  winDetections: WinDetections;
  playerMoves: PlayerMoves;

  constructor(connectFourGame: ConnectFourGame, currentPlayer: string) {
    this.connectFourGame = connectFourGame;
    this.board = this.connectFourGame.board;
    this.currentPlayer = currentPlayer;
    this.winDetections = new WinDetections(this.board);
    this.playerMoves = this.connectFourGame.playerMoves;
  }

  dropDisc(columnIndex: number): void {
    if (this.board.checkForValidMove(columnIndex)) {
      let playDiscCommand: PlayDiscCommand = new PlayDiscCommand(this.board, this.currentPlayer, columnIndex);
      this.playerMoves.setMove(playDiscCommand);
      this.playerMoves.executeMove();
      this.setStateOfGame(columnIndex, this.board.lastDiscPlayed.y);
    }
  }

  setStateOfGame(x: number, y: number): void {
    if (this.winDetections.playerWon(x, y)) this.connectFourGame.setCurrentStateToWin(this.currentPlayer);
    else if (this.board.isDraw()) this.connectFourGame.setCurrentStateToDraw();
    else this.connectFourGame.setCurrentStateToOtherPlayer(this.currentPlayer);
  }

  undoMove(i: number): void {
    this.playerMoves.undoMove(i);
    this.connectFourGame.setCurrentStateToOtherPlayer(this.currentPlayer);
  }

  resetGame(): void {
    this.connectFourGame.resetGame();
  }

}
