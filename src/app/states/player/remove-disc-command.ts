import {Command} from "./command";
import {MoveReceiver} from "./move-receiver";

export class RemoveDiscCommand implements Command {
  moveReceiver: MoveReceiver;

  constructor(moveReceiver: MoveReceiver) {
    this.moveReceiver = moveReceiver;
  }

  execute(): void {
    this.moveReceiver.removeDisc();
  }
}
