import {Command} from "./command";
import {Board} from "../../shared/board";

export class PlayDiscCommand implements Command {
  displayMessage: string;
  state: string;
  previousMove: any;
  currentPlayer: string;
  columnIndex: number;

  constructor(private board: Board, currentPlayer: string, columnIndex: number) {
    this.currentPlayer = currentPlayer;
    this.columnIndex = columnIndex;
    this.displayMessage = this.currentPlayer + " plays in column " + (this.columnIndex + 1);
    this.state = "";
  }

  execute(): void {
    this.state = "currentMove";
    this.board.playDisc(this.columnIndex, this.currentPlayer);
    this.previousMove = this.board.lastDiscPlayed;
  }

  undo(): void {
    this.state = "undo";
    this.board.removeDisc(this.previousMove);
  }

  redo(): void {
    this.state = "currentMove";
    this.board.replayDisc(this.previousMove, this.currentPlayer);
  }
}
