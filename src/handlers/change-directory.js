import { chdir } from 'node:process';
import { app } from '#src/app.js';

/**
 * Changes the current working directory to the specified path.
 *
 * @throws {Error} If the specified path does not exist or is not a directory.
 *
 * @param {string} path - The path to the new current working directory.
 */
export function changeDirectory(path) {
	try {
		chdir(path);
		app.userInterface.updatePromptText();
	} catch (err) {
		throw new Error(`Cannot change directory: ${err}`);
	}
}
