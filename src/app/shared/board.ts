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
          {state: "empty", y: 0},
          {state: "empty", y: 1},
          {state: "empty", y: 2},
          {state: "empty", y: 3},
          {state: "empty", y: 4},
          {state: "empty", y: 5},
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

  getTopEmptyCell(columnIndex: number): any {
    return this.lastDiscPlayed = this.slots[columnIndex].cells.find((cell: any) => cell.state === "empty");
  }

  isDraw(): boolean {
    return this.slots.every((slot: any): boolean => {
      return slot.cells.every((cell: any) => cell.state === "player one" || cell.state === "player two")});
  }

}
