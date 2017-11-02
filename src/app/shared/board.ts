export class Board {
  slots: any;
  lastDiscPlayed: any;

  constructor() {
    this.slots = [];
    this.lastDiscPlayed = {};
    this.setSlots();
  }

  setSlots() {
    for (let i = 0; i < 7; i++) {
      this.slots.push({
        cells: [
          {state: "empty", x: i, y: 0},
          {state: "empty", x: i, y: 1},
          {state: "empty", x: i, y: 2},
          {state: "empty", x: i, y: 3},
          {state: "empty", x: i, y: 4},
          {state: "empty", x: i, y: 5},
        ]
      });
    }
  }

  clearBoard(): void {
    this.slots.forEach((slot: any) => {
      slot.cells.forEach((cell: any) => {
        cell.state = "empty";
      })
    });
  }

  getCell(x: number, y: number): any {
    return this.slots[x].cells.find((cell: any) => cell.y === y);
  }

  checkForValidMove(columnIndex: number): boolean {
    return this.slots[columnIndex].cells.some((cell: any) => cell.state === "empty");
  }

  playDisc(columnIndex: number, currentPlayer: string): void {
    this.lastDiscPlayed = this.getTopEmptyCell(columnIndex);
    this.lastDiscPlayed.state = currentPlayer;
  }

  removeDisc(previousMove: any): void {
    previousMove.state = "empty";
  }

  replayDisc(previousMove: any, currentPlayer: string): void {
    previousMove.state = currentPlayer;
  }

  getTopEmptyCell(columnIndex: number): any {
    return this.lastDiscPlayed = this.slots[columnIndex].cells.find((cell: any) => cell.state === "empty");
  }
}
