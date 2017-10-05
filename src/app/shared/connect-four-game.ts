import {Board} from "./board";
import {PlayerOne} from "../states/player/player-one";
import {PlayerTwo} from "../states/player/player-two";
import {DrawState} from "../states/draw/draw-state";
import {PlayerOneWinState} from "../states/win/player-one-win-state";
import {PlayerTwoWinState} from "../states/win/player-two-win-state";
import {PlayerMoves} from "../states/player/playerMoves";

export class ConnectFourGame {
  board: Board;
  playerOne: State;
  playerTwo: State;
  drawState: State;
  playerOneWinState: State;
  playerTwoWinState: State;
  currentState: State;
  playerMoves: PlayerMoves;

  constructor() {
    this.board = new Board();
    this.playerMoves = new PlayerMoves();
    this.playerOne = new PlayerOne(this);
    this.playerTwo = new PlayerTwo(this);
    this.playerOneWinState = new PlayerOneWinState(this);
    this.playerTwoWinState = new PlayerTwoWinState(this);
    this.drawState = new DrawState(this);
    this.currentState = this.playerOne;
  }

  setCurrentStateToWin(currentPlayer: string): void {
    if (currentPlayer === "player one") this.currentState = this.playerOneWinState;
    else this.currentState = this.playerTwoWinState;
  }

  setCurrentStateToDraw(): void {
    this.currentState = this.drawState;
  }

  setCurrentStateToOtherPlayer(currentPlayer: string): void {
    currentPlayer === "player one"
      ? this.currentState = this.playerTwo
      : this.currentState = this.playerOne
  }

  resetGame(): void {
    this.board.clearBoard();
    this.playerMoves.pastMoves = [];
    this.playerMoves.undoMoves = [];
    this.playerMoves.redoMoves = [];
    this.currentState = this.playerOne;
  }
}
