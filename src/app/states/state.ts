interface State {
  message: string;
  messageColor: string;
  dropDisc(columnIndex?: number): void;
  undoMove(): void;
  redoMove(): void;
  resetGame(): void;
}
