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
    let moveToUndo = this.undoMoves.shift();
    this.redoMoves.push(moveToUndo);
    moveToUndo.undo();
  }

  redoMove(): void {
    let moveToRedo = this.redoMoves.pop();
    this.undoMoves.unshift(moveToRedo);
    moveToRedo.redo();
  }
}
