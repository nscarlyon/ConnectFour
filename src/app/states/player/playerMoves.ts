import {PlayDiscCommand} from "./play-disc-command";
import {RemoveDiscCommand} from "./remove-disc-command";

export class PlayerMoves {
  moves: any;

  constructor() {
    this.moves = [];
  }

  setMove(playDiscCommand: PlayDiscCommand, removeDiscCommand: RemoveDiscCommand): void {
    this.moves.unshift([playDiscCommand, removeDiscCommand]);
  }

  executeMove(): void {
    this.moves[0][0].execute();
  }

  undoMove(): void {
    this.moves[0][1].execute();
  }
}
