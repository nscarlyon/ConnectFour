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
    this.redoMoves.push(this.undoMoves[0]);
    this.undoMoves[0].undo();
    this.undoMoves.splice(0, 1);
  }

  redoMove(): void {
    let i: number = this.redoMoves.length - 1;
    this.undoMoves.unshift(this.redoMoves[i]);
    this.redoMoves[i].redo();
    this.redoMoves.splice(i, 1);
  }
}
