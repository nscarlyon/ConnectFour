import {Board} from "../../shared/board";

export class MoveReceiver {
  columnIndex: number;
  board: Board;
  currentPlayer: string;
  previousMove: any;

  constructor(board: Board, currentPlayer: string, columnIndex: number) {
    this.board = board;
    this.currentPlayer = currentPlayer;
    this.columnIndex = columnIndex;
  }

  playDisc(): void {
    this.board.playDisc(this.columnIndex, this.currentPlayer);
    this.previousMove = this.board.lastDiscPlayed;
  }

  removeDisc(): void {
    this.board.removeDisc(this.previousMove);
  }

}
