import {Board} from "../../shared/board";

export class PlayDiscCommand {
  displayMessage: string;
  previousMove: any;
  currentPlayer: string;
  columnIndex: number;

  constructor(private board: Board, currentPlayer: string, columnIndex: number) {
    this.currentPlayer = currentPlayer;
    this.columnIndex = columnIndex;
    this.displayMessage = this.currentPlayer + " plays in column " + (this.columnIndex + 1);
  }

  execute(): void {
    this.board.playDisc(this.columnIndex, this.currentPlayer);
    this.previousMove = this.board.lastDiscPlayed;
  }

  undo(): void {
    this.board.removeDisc(this.previousMove);
  }

  redo(): void {
    this.board.replayDisc(this.previousMove, this.currentPlayer);
  }
}
