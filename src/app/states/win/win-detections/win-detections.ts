import {Board} from "../../../shared/board";

export class WinDetections {
  board: Board;

  constructor(board: Board) {
    this.board = board;
  }

  playerWon(x: number, y:number): boolean {
    return this.detectVerticalWins(x, y)
      || this.detectHorizontalWins(y)
      || this.detectDiagonalRightWins()
      || this.detectDiagonalLeftWins();
  }

  detectVerticalWins(x: number, y: number): boolean {
    if (y >= 3) {
      return this.board.getCell(x, y).state === this.board.getCell(x, y-1).state
        && this.board.getCell(x, y-1).state === this.board.getCell(x, y-2).state
        && this.board.getCell(x, y-2).state === this.board.getCell(x, y-3).state;
    }
    return false;
  }

  detectHorizontalWins(y: number): boolean {
    for(let x = 0; x < 4; x++) {
      if(this.isHorizontalWin(x, y)) return true;
    }
    return false;
  }

  isHorizontalWin(x: number, y: number): boolean {
    return this.board.getCell(x, y).state === this.board.getCell(x+1, y).state
      && this.board.getCell(x+1, y).state === this.board.getCell(x+2, y).state
      && this.board.getCell(x+2, y).state === this.board.getCell(x+3, y).state
      && this.board.getCell(x, y).state !== "empty";
  }

  detectDiagonalRightWins(): boolean {
    for(let y = 0; y < 3; y++) {
      for(let x = 0; x < 4; x++) {
        if(this.isDiagonalRightWin(x, y)) return true;
      }
    }
    return false;
  }

  isDiagonalRightWin(x: number, y: number): boolean {
    return this.board.getCell(x, y).state !== "empty"
      && this.board.getCell(x, y).state === this.board.getCell(x+1, y+1).state
      && this.board.getCell(x+1, y+1).state === this.board.getCell(x+2, y+2).state
      && this.board.getCell(x+2, y+2).state === this.board.getCell(x+3, y+3).state;
  }

  detectDiagonalLeftWins(): boolean {
    for(let y = 0; y < 3; y++) {
      for(let x = 6; x > 2; x--) {
        if(this.isDiagonalLeftWin(x, y)) return true;
      }
    }
    return false;
  }

  isDiagonalLeftWin(x: number, y: number): boolean {
    return this.board.getCell(x, y).state !== "empty"
      && this.board.getCell(x, y).state === this.board.getCell(x-1, y+1).state
      && this.board.getCell(x-1, y+1).state === this.board.getCell(x-2, y+2).state
      && this.board.getCell(x-2, y+2).state === this.board.getCell(x-3, y+3).state;
  }

  isDraw(): boolean {
    return this.board.slots.every((slot: any): boolean => {
      return slot.cells.every((cell: any) => cell.state === "player one" || cell.state === "player two")});
  }
}
