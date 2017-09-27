import {Board} from "../../shared/board";

export class MoveReceiver {
  columnIndex: number;
  board: Board;
  currentPlayer: string;

  constructor(board: Board, currentPlayer: string, columnIndex: number) {
    this.board = board;
    this.currentPlayer = currentPlayer;
    this.columnIndex = columnIndex;
  }

  playDisc(): void {
    this.board.playDisc(this.columnIndex, this.currentPlayer);
  }

  removeDisc(): void {
    this.board.lastDiscPlayed.state = "empty";
  }

}
