import { appendFile } from 'fs/promises';
import { ERROR_MESSAGES } from '#src/constants/const.js';

export async function add(pathName) {
	if (pathName.length !== 1) {
		console.log(ERROR_MESSAGES.invalidInput);
		return;
	}

	try {
		await appendFile(pathName[0], '');
	} catch (error) {
		throw new Error(`Cannot add file: ${error.message}`);
	}
}
