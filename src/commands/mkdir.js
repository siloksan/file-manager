import { mkdir as mkdirAsync } from 'fs/promises';
import { ERROR_MESSAGES } from '#src/constants/const.js';

export async function mkdir(dirName) {
	if (dirName.length !== 1) {
		console.log(ERROR_MESSAGES.invalidInput);
		return;
	}

	try {
		await mkdirAsync(dirName[0], { recursive: true });
	} catch (error) {
		throw new Error(`Error creating directory: ${error.message}`);
	}
}
