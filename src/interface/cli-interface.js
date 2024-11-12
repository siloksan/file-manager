import { stdin as input, stdout as output } from 'node:process';
import * as readline from 'node:readline/promises';
import { setPromptText } from '#src/utils/index.js';
import { commandHandler } from '#src/handlers/index.js';

export class CliInterface {
	constructor(appRunner) {
		this.appRunner = appRunner;
		this.rl = readline.createInterface({
			input,
			output,
		});
	}

	async requestUserInput() {
		this.rl.prompt();
		this._readlineEngine();
	}

	async _readlineEngine() {
		this.rl.on('line', this._readlineHandler).on('close', this._closeReadline);
	}

	updatePromptText = () => {
		setPromptText(this.rl);
	};

	_readlineHandler = async (line) => {
		if (line === '.exit') {
			this._closeReadline();
			return;
		}
		await commandHandler(line);
		this.rl.prompt();
	};

	_closeReadline = () => {
		this.appRunner.undo();
		process.exit(0);
	};
}
