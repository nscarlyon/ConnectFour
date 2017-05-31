import {ConnectFourGame} from "../../shared/connect-four-game";

describe('player tests', () => {
  let connectFourGame: ConnectFourGame;

  beforeEach(() =>
      connectFourGame = new ConnectFourGame()
  );

  function dropMany(slotIndex: number, numOfTurns: number) {
    for (let i = 0; i < numOfTurns; i++) {
      connectFourGame.currentState.dropDisc(slotIndex);
    }
  }

  it('should fill the most bottom empty cell in slot', () => {
    connectFourGame.currentState.dropDisc(0);
    expect(connectFourGame.board.getCell(0, 0).state).toEqual("player one");
  });

  it('should alternate between player states', () => {
    expect(connectFourGame.currentState).toEqual(connectFourGame.playerOne);
    connectFourGame.currentState.dropDisc(0);
    expect(connectFourGame.currentState).toEqual(connectFourGame.playerTwo);
    connectFourGame.currentState.dropDisc(0);
    expect(connectFourGame.currentState).toEqual(connectFourGame.playerOne);
  });

  it('should declare correct player turn', () => {
    expect(connectFourGame.currentState.message).toEqual("Player One's Turn");
    connectFourGame.currentState.dropDisc(0);
    expect(connectFourGame.currentState.message).toEqual("Player Two's Turn");
  });

  it('should not switch to other player on invalid move', () => {
    dropMany(0, 7);
    expect(connectFourGame.currentState.message).toEqual("Player One's Turn");
  });

  it('should be able to reset the game during a game', () => {
    dropMany(0, 3);
    connectFourGame.currentState.resetGame();
    expect(connectFourGame.currentState.message).toEqual("Player One's Turn");
    expect(connectFourGame.board.getCell(0,0).state).toEqual("empty");
  });

  it('should switch to player one win state when player one wins', () => {
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(1);
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(1);
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(1);
    connectFourGame.currentState.dropDisc(0);
    expect(connectFourGame.currentState).toEqual(connectFourGame.playerOneWinState);
  });

  it('should switch to player two win state when player two wins', () => {
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(1);
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(1);
    connectFourGame.currentState.dropDisc(0);
    connectFourGame.currentState.dropDisc(1);
    connectFourGame.currentState.dropDisc(3);
    connectFourGame.currentState.dropDisc(1);
    expect(connectFourGame.currentState).toEqual(connectFourGame.playerTwoWinState);
  });

  it('should switch to draw state when nobody wins', () => {
    dropMany(0, 6);
    dropMany(1, 6);
    dropMany(2, 6);
    connectFourGame.currentState.dropDisc(4);
    dropMany(3, 6);
    dropMany(4, 5);
    dropMany(5, 6);
    dropMany(6, 6);
    expect(connectFourGame.currentState).toEqual(connectFourGame.drawState);
  });

});
