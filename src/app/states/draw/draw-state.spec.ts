import {ConnectFourGame} from "../../shared/connect-four-game";

describe('draw state tests', () => {
  let connectFourGame: ConnectFourGame;

  beforeEach(() =>
      connectFourGame = new ConnectFourGame()
  );

  function dropMany(slotIndex: number, numOfTurns: number) {
    for (let i = 0; i < numOfTurns; i++) {
      connectFourGame.currentState.dropDisc(slotIndex);
    }
  }

  function setDraw(): void {
    dropMany(0, 6);
    dropMany(1, 6);
    dropMany(2, 6);
    connectFourGame.currentState.dropDisc(4);
    dropMany(3, 6);
    dropMany(4, 5);
    dropMany(5, 6);
    dropMany(6, 6);
  }

  it('should declare a draw', () => {
    setDraw();
    expect(connectFourGame.currentState.message).toEqual("Draw");
  });

  it('should not be able to drop a disc', () => {
    setDraw();
    connectFourGame.currentState.dropDisc(0);
    expect(connectFourGame.currentState.message).toEqual("Please start a new game.");
    expect(connectFourGame.board.getCell(0,5).state).toEqual("player two");
  });

  it('should be able to reset game after draw', () => {
    setDraw();
    connectFourGame.currentState.resetGame();
    expect(connectFourGame.currentState).toEqual(connectFourGame.playerOne);
    expect(isBoardEmpty(connectFourGame.board)).toEqual(true);
  });

  function isBoardEmpty(board: any): boolean {
    return board.slots.every((slot: any) => slot.cells.every((cell: any) => cell.state == "empty"));
  }
});
