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
  });

  it('should keep track of all player moves', () => {
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(0);
    expect(connectFourGame.playerMoves.moves.length).toEqual(3);
  });
});
