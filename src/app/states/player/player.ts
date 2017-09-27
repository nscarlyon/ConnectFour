import {ConnectFourGame} from "../../shared/connect-four-game";
import {Board} from "../../shared/board";
import {WinDetections} from "../win/win-detections/win-detections";
import {PlayerMoves} from "./playerMoves";
import {MoveReceiver} from "./move-receiver";
import {PlayDiscCommand} from "./play-disc-command";
import {RemoveDiscCommand} from "./remove-disc-command";

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
      let moveReceiver: MoveReceiver = new MoveReceiver(this.board, this.currentPlayer, columnIndex);
      let playDiscCommand: PlayDiscCommand = new PlayDiscCommand(moveReceiver);
      let removeDiscCommand: RemoveDiscCommand = new RemoveDiscCommand(moveReceiver);
      this.playerMoves.setMove(playDiscCommand, removeDiscCommand);
      this.playerMoves.executeMove();
      this.setStateOfGame(columnIndex, this.board.lastDiscPlayed.y);
    }
  }

  setStateOfGame(x: number, y: number): void {
    if (this.winDetections.playerWon(x, y)) this.connectFourGame.setCurrentStateToWin(this.currentPlayer);
    else if (this.board.isDraw()) this.connectFourGame.setCurrentStateToDraw();
    else this.connectFourGame.setCurrentStateToOtherPlayer(this.currentPlayer);
  }

  undoMove(): void {
    this.playerMoves.undoMove();
    this.connectFourGame.setCurrentStateToOtherPlayer(this.currentPlayer);
  }

  resetGame(): void {
    this.connectFourGame.resetGame();
  }

}
