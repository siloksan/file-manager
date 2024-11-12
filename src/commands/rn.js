import { rename } from 'fs/promises';
import { ERROR_MESSAGES } from '#src/constants/const.js';

export async function rn(args) {
	if (args.length !== 2) {
		console.log(ERROR_MESSAGES.invalidInput);
		return;
	}

	const [pathName, newName] = args;

	try {
		await rename(pathName, newName);
	} catch (error) {
		throw new Error(`Error renaming file: ${error.message}`);
	}
}
