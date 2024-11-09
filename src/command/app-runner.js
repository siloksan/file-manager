import { CliInterface } from '#src/interface/cli-interface.js';
import { goodbye, greet } from '#src/services/index.js';

export class AppRunner {
	constructor() {
		this.interface = new CliInterface(this);
	}
	execute() {
		greet();
		this.interface.requestUserInput();
	}

	undo() {
		goodbye();
	}
}
