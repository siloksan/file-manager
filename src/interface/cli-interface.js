import { setPromptText } from '#src/utils/index.js';
import { stdin as input, stdout as output } from 'node:process';
import * as readline from 'node:readline/promises';

export class CliInterface {
	constructor(appRunner) {
		this.appRunner = appRunner;
		this.rl = readline.createInterface({
			input,
			output,
		});
		this._setPromptText();
	}

	async requestUserInput() {
		this.rl.prompt();
		this._readlineEngine();
	}

	async _readlineEngine() {
		this.rl.on('line', this._readlineHandler).on('close', this._closeReadline);
	}

	_readlineHandler = async (line) => {
		switch (line.trim()) {
			case 'hello':
				console.log('world!');
				break;
			default:
				console.log(`Say what? I might have heard '${line.trim()}'`);
				break;
		}
		this.rl.prompt();
	};

	_setPromptText = () => {
		setPromptText(this.rl);
	};

	_closeReadline = () => {
		this.appRunner.undo();
		process.exit(0);
	};
}
