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
    expect(connectFourGame.playerMoves.pastMoves.length).toEqual(0);
    expect(connectFourGame.playerMoves.undoMoves.length).toEqual(0);
  });

  it('should keep track of all player pastMoves', () => {
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(0);
    expect(connectFourGame.playerMoves.pastMoves.length).toEqual(3);
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
    expect(connectFourGame.playerMoves.pastMoves[0].displayMessage).toEqual("player two plays in column 1");
    expect(connectFourGame.playerMoves.pastMoves[1].displayMessage).toEqual("player one plays in column 1");
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

  it('should display undo moves in order', () => {
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.undoMove();
    connectFourGame.currentState.undoMove();
    connectFourGame.currentState.undoMove();
    expect(connectFourGame.playerMoves.undoMoves[0].displayMessage).toEqual("player two plays in column 1");
    expect(connectFourGame.playerMoves.undoMoves[1].displayMessage).toEqual("player one plays in column 1");
    expect(connectFourGame.playerMoves.undoMoves[2].displayMessage).toEqual("player two plays in column 1");
  });

  it('should keep track of current move after undo', () => {
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.undoMove();
    expect(connectFourGame.playerMoves.pastMoves[0].state).toEqual("currentMove");
  });

  it('should clear undo moves after executing a move', () => {
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.undoMove();
    connectFourGame.currentState.undoMove();
    connectFourGame.currentState.dropDisc(0);
    expect(connectFourGame.playerMoves.undoMoves.length).toEqual(0);
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
});
