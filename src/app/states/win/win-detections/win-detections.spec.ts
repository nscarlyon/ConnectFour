import {ConnectFourGame} from "../../../shared/connect-four-game";
import {WinDetections} from "./win-detections";

describe('win detections state tests', () => {
  let connectFourGame: ConnectFourGame = new ConnectFourGame();
  let winDetections: WinDetections;

  beforeEach(() =>
    winDetections = new WinDetections(connectFourGame.board)
  );

  function setCell(x: number, y: number, player: string) {
    connectFourGame.board.getCell(x, y).state = player;
  }

  function setVerticalWin(x: number, y: number) {
    setCell(x, y, "player one");
    setCell(x, y+1, "player one");
    setCell(x, y+2, "player one");
    setCell(x, y+3, "player one");
  }

  it('should detect all vertical wins', () => {
    for(let y = 0; y < 3; y++) {
      connectFourGame.board.slots.forEach((slot: any, x: number) => {
        setVerticalWin(x, y);
        expect(winDetections.playerWon(x,y+3)).toEqual(true);
        connectFourGame.resetGame();
      });
    }
  });

  it('should not detect a vertical win for consecutive discs of different players', () => {
    setCell(0, 1, "player one");
    setCell(0, 2, "player two");
    setCell(0, 3, "player one");
    setCell(0, 4, "player one");
    expect(winDetections.playerWon(0, 0)).toEqual(false);
  });

  it('should not detect a vertical win for less than four discs in a row', () => {
    setCell(0, 1, "player one");
    setCell(0, 2, "player two");
    setCell(0, 3, "player one");
    expect(winDetections.playerWon(0, 0)).toEqual(false);
  });

  function setHorizontalWin(x: number, y: number) {
    setCell(x, y, "player two");
    setCell(x+1, y, "player two");
    setCell(x+2, y, "player two");
    setCell(x+3, y, "player two");
  }

  it('should detect all horizontal wins', () => {
    for(let x = 0; x < 4; x++) {
      connectFourGame.board.slots[x].cells.forEach((cell: any, y: number) => {
        setHorizontalWin(x, y);
        expect(winDetections.playerWon(x, y)).toEqual(true);
        connectFourGame.resetGame();
      });
    }
  });

  it('should not detect a horizontal win for consecutive discs of different players', () => {
    setCell(0, 0, "player two");
    setCell(1, 0, "player two");
    setCell(2, 0, "player two");
    setCell(3, 0, "player one");
    expect(winDetections.playerWon(0, 0)).toEqual(false);
  });

  it('should not detect a horizontal win for less than four discs in a row', () => {
    setCell(0, 0, "player two");
    setCell(1, 0, "player two");
    setCell(2, 0, "player two");
    expect(winDetections.playerWon(0, 0)).toEqual(false);
  });

  function setDiagonalRightWin(x: number, y: number) {
    setCell(x, y, "player one");
    setCell(x+1, y+1, "player one");
    setCell(x+2, y+2, "player one");
    setCell(x+3, y+3, "player one");
  }

  it('should detect all diagonal right wins', () => {
    for(let y = 0; y < 3; y++) {
      for(let x = 0; x < 4; x++) {
        setDiagonalRightWin(x, y);
        expect(winDetections.playerWon(x, y)).toEqual(true);
        connectFourGame.resetGame();
      }
    }
  });

  it('should not detect a diagonal right win for consecutive discs of different players', () => {
    setCell(0, 0, "player two");
    setCell(1, 1, "player two");
    setCell(2, 2, "player two");
    setCell(3, 3, "player one");
    expect(winDetections.playerWon(0, 0)).toEqual(false);
  });

  it('should not detect a diagonal right win for less than four discs in a row', () => {
    setCell(0, 0, "player two");
    setCell(1, 1, "player two");
    setCell(2, 2, "player two");
    expect(winDetections.playerWon(0, 0)).toEqual(false);
  });

  function setDiagonalLeftWin(x: number, y: number): void {
    setCell(x, y, 'player two');
    setCell(x-1, y+1, 'player two');
    setCell(x-2, y+2, 'player two');
    setCell(x-3, y+3, 'player two');
  }

  it('should detect all diagonal left wins', () => {
    for(let y = 0; y < 3; y++) {
      for(let x = 6; x < 2; x--) {
        setDiagonalLeftWin(x, y);
        expect(winDetections.playerWon(x, y)).toEqual(true);
        connectFourGame.resetGame();
      }
    }
  });

  it('should not detect a diagonal left win for consecutive discs of different players', () => {
    setCell(6, 0, "player two");
    setCell(5, 1, "player two");
    setCell(4, 2, "player two");
    setCell(3, 3, "player one");
    expect(winDetections.playerWon(6, 0)).toEqual(false);
  });

  it('should not detect a diagonal left win for less than four discs in a row', () => {
    setCell(6, 0, "player two");
    setCell(5, 1, "player two");
    setCell(4, 2, "player two");
    expect(winDetections.playerWon(6, 0)).toEqual(false);
  });

});
