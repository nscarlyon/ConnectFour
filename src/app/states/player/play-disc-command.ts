import {Command} from "./command";
import {MoveReceiver} from "./move-receiver";

export class PlayDiscCommand implements Command {
  moveReceiver: MoveReceiver;

  constructor(moveReceiver: MoveReceiver) {
    this.moveReceiver = moveReceiver;
  }

  execute(): void {
    this.moveReceiver.playDisc();
  }

}
