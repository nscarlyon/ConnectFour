import {PlayDiscCommand} from "./play-disc-command";
import {RemoveDiscCommand} from "./remove-disc-command";

export class PlayerMoves {
  moves: any;

  constructor() {
    this.moves = [];
  }

  setMove(playDiscCommand: PlayDiscCommand, removeDiscCommand: RemoveDiscCommand): void {
    this.moves.push([playDiscCommand, removeDiscCommand]);
  }

  executeMove(): void {
    this.moves[this.moves.length - 1][0].execute();
  }

  undoMove(): void {
    this.moves[this.moves.length - 1][1].execute();
  }
}
