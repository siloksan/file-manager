import { greet } from '#src/services/index.js';
export class AppRunner {
	execute() {
		greet();
	}

	undo() {
		console.log('Undoing start app command');
	}
}
