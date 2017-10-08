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

  it('should keep track of all player pastMoves', () => {
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(0);
    expect(connectFourGame.playerMoves.undoMoves.length).toEqual(3);
  });

  it('should be able to undo one player move', () => {
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.undoMove();
    expect(connectFourGame.board.getCell(0, 2).state).toEqual('empty');
  });

  it('should display all pastMoves with the most recent one first', () => {
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(0);
    expect(connectFourGame.playerMoves.undoMoves[0].displayMessage).toEqual("player two plays in column 1");
    expect(connectFourGame.playerMoves.undoMoves[1].displayMessage).toEqual("player one plays in column 1");
  });

  it('should be able to undo multiple pastMoves', () => {
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.undoMove();
    connectFourGame.currentState.undoMove();
    expect(connectFourGame.board.getCell(0, 0).state).toEqual('empty');
    expect(connectFourGame.board.getCell(0, 1).state).toEqual('empty');
  });

  it('should still be able to drop discs after undo', () => {
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.undoMove();
    connectFourGame.currentState.undoMove();
    connectFourGame.currentState.dropDisc(1);
    expect(connectFourGame.board.getCell(1, 0).state).toEqual("player one");
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

  it('should keep track of current move after undo', () => {
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.undoMove();
    expect(connectFourGame.playerMoves.undoMoves[0].displayMessage).toEqual("player one plays in column 1");
  });

  it('should clear redo moves after executing a move', () => {
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.undoMove();
    connectFourGame.currentState.undoMove();
    connectFourGame.currentState.dropDisc(0);
    expect(connectFourGame.playerMoves.redoMoves.length).toEqual(0);
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
    expect(connectFourGame.board.getCell(0, 0).state).toEqual("player one");
    expect(connectFourGame.board.getCell(0, 1).state).toEqual("player two");
  });
});
