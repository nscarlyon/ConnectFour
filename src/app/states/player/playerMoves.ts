import {PlayDiscCommand} from "./play-disc-command";

export class PlayerMoves {
  moves: any;

  constructor() {
    this.moves = [];
  }

  setMove(playDiscCommand: PlayDiscCommand): void {
    if (this.moves.length > 0) this.moves[0].state = "past";
    this.moves.unshift(playDiscCommand);
  }

  executeMove(): void {
    this.moves[0].execute();
  }

  undoMove(i: number): void {
    this.moves[i].undo();
  }
}
