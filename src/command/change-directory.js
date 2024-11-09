import { chdir } from 'node:process';

/**
 * Changes the current working directory to the specified path.
 *
 * @throws {Error} If the specified path is not a valid directory.
 *
 * @param {string} path - The path to the directory to change to.
 */
export function changeDirectory(path) {
	try {
		chdir(path);
	} catch (err) {
		throw new Error(`Cannot change directory: ${err}`);
	}
}
