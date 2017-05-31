import {ConnectFourGame} from "../../shared/connect-four-game";

describe('win state tests', () => {
  let connectFourGame: ConnectFourGame;

  beforeEach(() =>
      connectFourGame = new ConnectFourGame()
  );

  function setPlayerOneWin(): void {
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(1);
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(1);
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(1);
    connectFourGame.currentState.dropDisc(0);
  }

  function setPlayerTwoWin(): void {
    connectFourGame.currentState.dropDisc(3);
    connectFourGame.currentState.dropDisc(1);
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(1);
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(1);
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(1);
  }

  it('should declare a win for player one', () => {
    setPlayerOneWin();
    expect(connectFourGame.currentState.message).toEqual('Player One Won');
  });

  it('should declare a win for player two', () => {
    setPlayerTwoWin();
    expect(connectFourGame.currentState.message).toEqual('Player Two Won');
  });

  it('should not drop a disc when player one wins', () => {
    setPlayerOneWin();
    connectFourGame.currentState.dropDisc(0);
    expect(connectFourGame.currentState.message).toEqual("Please start a new game.");
    expect(connectFourGame.board.getCell(0,4).state).toEqual("empty");
  });

  it('should not drop a disc when player two wins', () => {
    setPlayerTwoWin();
    connectFourGame.currentState.dropDisc(1);
    expect(connectFourGame.currentState.message).toEqual("Please start a new game.");
    expect(connectFourGame.board.getCell(0,4).state).toEqual("empty");
  });

  it('should be able to reset game when player one wins', () => {
    setPlayerOneWin();
    connectFourGame.currentState.resetGame();
    expect(connectFourGame.currentState).toEqual(connectFourGame.playerOne);
    expect(connectFourGame.board.getCell(0,0).state).toEqual("empty");
  });

  it('should be able to reset game when player two wins', () => {
    setPlayerTwoWin();
    connectFourGame.currentState.resetGame();
    expect(connectFourGame.currentState).toEqual(connectFourGame.playerOne);
    expect(connectFourGame.board.getCell(0,0).state).toEqual("empty");
  });
});
