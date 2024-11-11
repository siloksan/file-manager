import { CliInterface } from '#src/interface/cli-interface.js';
import { goodbye, initializeApp } from '#src/services/index.js';

export class AppRunner {
	constructor() {
		this.userInterface = new CliInterface(this);
	}
	execute() {
		try {
			initializeApp();
			this.userInterface.requestUserInput();
		} catch (error) {
			setImmediate(() => process.exit(1));
			throw new Error(error.message);
		}
	}

	undo() {
		goodbye();
	}
}
