import {PlayDiscCommand} from "./play-disc-command";

export class PlayerMoves {
  undoMoves: any;
  redoMoves: any;

  constructor() {
    this.undoMoves = [];
    this.redoMoves = [];
  }

  setMove(playDiscCommand: PlayDiscCommand): void {
    this.undoMoves.unshift(playDiscCommand);
  }

  executeMove(): void {
    this.undoMoves[0].execute();
    this.redoMoves = [];
  }

  undoMove(): void {
    this.undoMoves[0].undo();
    this.redoMoves.push(this.undoMoves[0]);
    this.undoMoves.splice(0, 1);
  }

  redoMove(): void {
    this.redoMoves[this.redoMoves.length - 1].redo();
    this.undoMoves.unshift(this.redoMoves[this.redoMoves.length - 1]);
    this.redoMoves.splice(this.redoMoves.length - 1, 1);
  }
}
