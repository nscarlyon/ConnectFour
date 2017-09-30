import {Command} from "./command";
import {MoveReceiver} from "./move-receiver";

export class PlayDiscCommand implements Command {
  moveReceiver: MoveReceiver;
  displayMessage: string;
  state: string;

  constructor(moveReceiver: MoveReceiver) {
    this.moveReceiver = moveReceiver;
    this.displayMessage = this.moveReceiver.currentPlayer + " plays in column " + (this.moveReceiver.columnIndex + 1);
    this.state = "past";
  }

  execute(): void {
    this.state = "currentMove";
    this.moveReceiver.playDisc();
  }

  undo(): void {
    this.state = "undo";
    this.moveReceiver.removeDisc();
  }
}
