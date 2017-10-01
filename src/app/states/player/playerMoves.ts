import {PlayDiscCommand} from "./play-disc-command";

export class PlayerMoves {
  pastMoves: any;
  undoMoves: any;

  constructor() {
    this.pastMoves = [];
    this.undoMoves = [];
  }

  setMove(playDiscCommand: PlayDiscCommand): void {
    if (this.pastMoves.length > 0) this.pastMoves[0].state = "past";
    this.pastMoves.unshift(playDiscCommand);
  }

  executeMove(): void {
    this.pastMoves[0].execute();
    this.undoMoves = [];
  }

  undoMove(): void {
    this.pastMoves[0].undo();
    this.undoMoves.unshift(this.pastMoves[0]);
    this.pastMoves.splice(0, 1);
    if(this.pastMoves.length > 0) this.pastMoves[0].state = "currentMove";
  }
}
