interface State {
  message: string;
  messageColor: string;
  dropDisc(columnIndex?: number): void;
  resetGame(): void;
}
