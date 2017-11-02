import {ConnectFourGame} from "./connect-four-game";

describe('connect-four-game tests', () => {
  let connectFourGame: ConnectFourGame;

  beforeEach(() =>
      connectFourGame = new ConnectFourGame()
  );

  it('should reset the game', () => {
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.resetGame();
    expect(connectFourGame.currentState.message).toEqual("Player One's Turn");
    expect(connectFourGame.board.getCell(0, 0).state).toEqual('empty');
    expect(connectFourGame.playerMoves.undoMoves.length).toEqual(0);
    expect(connectFourGame.playerMoves.undoMoves.length).toEqual(0);
  });

  it('should display undo moves with the most recent one first', () => {
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(0);
    expect(connectFourGame.playerMoves.undoMoves[0].displayMessage).toEqual("player two plays in column 1");
    expect(connectFourGame.playerMoves.undoMoves[1].displayMessage).toEqual("player one plays in column 1");
  });

  it('should undo one player move', () => {
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.undoMove();
    expect(connectFourGame.board.getCell(0, 1).state).toEqual('empty');
  });

  it('should display correct undo move after undo', () => {
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.undoMove();
    expect(connectFourGame.playerMoves.undoMoves[0].displayMessage).toEqual("player one plays in column 1");
  });

  it('should undo multiple moves', () => {
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.undoMove();
    connectFourGame.currentState.undoMove();
    expect(connectFourGame.board.getCell(0, 0).state).toEqual('empty');
    expect(connectFourGame.board.getCell(0, 1).state).toEqual('empty');
  });

  it('should drop disc after undo', () => {
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.undoMove();
    connectFourGame.currentState.undoMove();
    connectFourGame.currentState.dropDisc(1);
    expect(connectFourGame.board.getCell(1, 0).state).toEqual("player one");
  });

  it('should redo one move', () => {
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.undoMove();
    connectFourGame.currentState.redoMove();
    expect(connectFourGame.board.getCell(0, 1).state).toEqual("player two");
  });

  it('should redo multiple moves', () => {
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.undoMove();
    connectFourGame.currentState.undoMove();
    connectFourGame.currentState.redoMove();
    connectFourGame.currentState.redoMove();
    expect(connectFourGame.board.getCell(0, 1).state).toEqual("player two");
    expect(connectFourGame.board.getCell(0, 2).state).toEqual("player one");
  });

  it('should display redo moves in order', () => {
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.undoMove();
    connectFourGame.currentState.undoMove();
    connectFourGame.currentState.undoMove();
    expect(connectFourGame.playerMoves.redoMoves[0].displayMessage).toEqual("player two plays in column 1");
    expect(connectFourGame.playerMoves.redoMoves[1].displayMessage).toEqual("player one plays in column 1");
    expect(connectFourGame.playerMoves.redoMoves[2].displayMessage).toEqual("player two plays in column 1");
  });

  it('should clear redo moves after executing a move', () => {
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.undoMove();
    connectFourGame.currentState.undoMove();
    connectFourGame.currentState.dropDisc(0);
    expect(connectFourGame.playerMoves.redoMoves.length).toEqual(0);
  });

  it('should redo an undo', () => {
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.undoMove();
    connectFourGame.currentState.redoMove();
    expect(connectFourGame.board.getCell(0, 0).state).toEqual("player one");
  });

  it('should redo multiple undos', () => {
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.undoMove();
    connectFourGame.currentState.undoMove();
    connectFourGame.currentState.redoMove();
    connectFourGame.currentState.redoMove();
    expect(connectFourGame.board.getCell(0, 0).state).toEqual("player one");
    expect(connectFourGame.board.getCell(0, 1).state).toEqual("player two");
  });

  it('should undo a redo', () => {
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.undoMove();
    connectFourGame.currentState.redoMove();
    connectFourGame.currentState.undoMove();
    expect(connectFourGame.board.getCell(0, 0).state).toEqual("empty");
  });

  it('should undo multiple redos', () => {
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.undoMove();
    connectFourGame.currentState.undoMove();
    connectFourGame.currentState.redoMove();
    connectFourGame.currentState.redoMove();
    connectFourGame.currentState.undoMove();
    connectFourGame.currentState.undoMove();
    expect(connectFourGame.board.getCell(0, 0).state).toEqual("empty");
    expect(connectFourGame.board.getCell(0, 1).state).toEqual("empty");
  });

  it('should undo a player one win', () => {
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(1);
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(1);
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(1);
    connectFourGame.currentState.dropDisc(0);
    expect(connectFourGame.currentState.message).toEqual("Player One Won");
    connectFourGame.currentState.undoMove();
    expect(connectFourGame.currentState.message).toEqual("Player One's Turn");
  });

  it('should redo a player one win', () => {
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(1);
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(1);
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(1);
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.undoMove();
    connectFourGame.currentState.redoMove();
    expect(connectFourGame.currentState.message).toEqual("Player One Won");
  });

  it('should undo a player two win', () => {
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(1);
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(1);
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(1);
    connectFourGame.currentState.dropDisc(3);
    connectFourGame.currentState.dropDisc(1);
    expect(connectFourGame.currentState.message).toEqual("Player Two Won");
    connectFourGame.currentState.undoMove();
    expect(connectFourGame.currentState.message).toEqual("Player Two's Turn");
  });

  it('should redo a player two win', () => {
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(1);
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(1);
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(1);
    connectFourGame.currentState.dropDisc(3);
    connectFourGame.currentState.dropDisc(1);
    connectFourGame.currentState.undoMove();
    connectFourGame.currentState.redoMove();
    expect(connectFourGame.currentState.message).toEqual("Player Two Won");
  });

  it('should undo a draw', () => {
    setDraw();
    connectFourGame.currentState.undoMove();
    expect(connectFourGame.currentState.message).toEqual("Player Two's Turn");
  });

  it('should redo a draw', () => {
    setDraw();
    connectFourGame.currentState.undoMove();
    connectFourGame.currentState.redoMove();
    expect(connectFourGame.currentState.message).toEqual("Draw");
  });

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

  it('should continue to drop discs when user clicks undo when there are no moves to undo', () => {
    connectFourGame.currentState.undoMove();
    connectFourGame.currentState.dropDisc(0);
    expect(connectFourGame.board.getCell(0,0).state).toEqual("player one");
  });

});
