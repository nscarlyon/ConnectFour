import {Board} from "../../shared/board";
import {PlayDiscCommand} from "./play-disc-command";

export class PlayerMoves {
  board: Board;
  moves: Array<PlayDiscCommand>;

  constructor(board: Board) {
    this.board = board;
    this.moves = [];
  }

  setMove(playDiscCommand: PlayDiscCommand): void {
    this.moves.push(playDiscCommand);
  }

  executeMove(): void {
    this.moves[this.moves.length - 1].execute();
  }
}
