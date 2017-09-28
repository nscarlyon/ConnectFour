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
    expect(connectFourGame.playerMoves.moves.length).toEqual(0);
  });

  it('should keep track of all player moves', () => {
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(0);
    expect(connectFourGame.playerMoves.moves.length).toEqual(3);
  });

  it('should be able to undo one player move', () => {
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.undoMove();
    expect(connectFourGame.board.getCell(0, 2).state).toEqual('empty');
  });

  it('should display all moves with the most recent one first', () => {
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(0);
    expect(connectFourGame.playerMoves.moves[1][0].displayMessage).toEqual("player one plays in column 1");
    expect(connectFourGame.playerMoves.moves[0][0].displayMessage).toEqual("player two plays in column 1");
  });
});
