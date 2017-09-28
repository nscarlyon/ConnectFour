import {Command} from "./command";
import {MoveReceiver} from "./move-receiver";

export class PlayDiscCommand implements Command {
  moveReceiver: MoveReceiver;
  displayMessage: string;

  constructor(moveReceiver: MoveReceiver) {
    this.moveReceiver = moveReceiver;
    this.displayMessage = this.moveReceiver.currentPlayer + " plays in column " + (this.moveReceiver.columnIndex + 1);
  }

  execute(): void {
    this.moveReceiver.playDisc();
  }
}
