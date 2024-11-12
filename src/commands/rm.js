import { unlink } from 'fs/promises';
import { ERROR_MESSAGES } from '#src/constants/const.js';

export async function rm(args) {
	if (args.length !== 1) {
		console.log(ERROR_MESSAGES.invalidInput);
		return;
	}

	const [pathName] = args;

	try {
		await unlink(pathName);
	} catch (error) {
		console.error(`Failed to remove file: ${error.message}`);
	}
}
