interface State {
  message: string;
  messageColor: string;
  dropDisc(columnIndex?: number): void;
  undoMove(): void;
  resetGame(): void;
}
