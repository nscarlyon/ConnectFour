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
    this.undoMoves[0].redo();
    this.redoMoves.unshift(this.undoMoves[0]);
    this.undoMoves.splice(0, 1);
    if(this.undoMoves.length > 0) this.undoMoves[0].state = "currentMove";
  }
}
