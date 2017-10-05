import {PlayDiscCommand} from "./play-disc-command";

export class PlayerMoves {
  pastMoves: any;
  undoMoves: any;
  redoMoves: any;

  constructor() {
    this.pastMoves = [];
    this.undoMoves = [];
    this.redoMoves = [];
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
    this.undoMoves.push(this.pastMoves[0]);
    this.pastMoves.splice(0, 1);
    if(this.pastMoves.length > 0) this.pastMoves[0].state = "currentMove";
  }

  redoMove(): void {
    if(this.redoMoves.length > 0) this.redoMoves[0].state = "past";
    if(this.pastMoves.length > 0) this.pastMoves[0].state = "past";
    this.redoMoves.unshift(this.undoMoves[this.undoMoves.length - 1]);
    this.undoMoves.splice(this.undoMoves.length - 1, 1);
    this.redoMoves[0].redo();
  }
}
