import {PlayDiscCommand} from "./play-disc-command";

export class PlayerMoves {
  moves: any;

  constructor() {
    this.moves = [];
  }

  setMove(playDiscCommand: PlayDiscCommand): void {
    this.moves.push(playDiscCommand);
  }

  executeMove(): void {
    this.moves[this.moves.length - 1].execute();
  }

  undoMove(): void {
    this.moves[this.moves.length - 1].undo();
  }
}
