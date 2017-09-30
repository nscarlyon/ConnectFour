interface State {
  message: string;
  messageColor: string;
  dropDisc(columnIndex?: number): void;
  undoMove(i?: number): void;
  resetGame(): void;
}
