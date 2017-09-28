import {PlayDiscCommand} from "./play-disc-command";

export class PlayerMoves {
  moves: any;

  constructor() {
    this.moves = [];
  }

  setMove(playDiscCommand: PlayDiscCommand): void {
    this.moves.unshift(playDiscCommand);
  }

  executeMove(): void {
    this.moves[0].execute();
  }

  undoMove(): void {
    this.moves[0].undo();
  }
}
