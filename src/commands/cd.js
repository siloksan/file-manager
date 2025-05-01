import { resolve } from 'path';
import { stat } from 'fs/promises';
import { changeDirectory } from '#src/handlers/index.js';
import { ERROR_MESSAGES } from '#src/constants/const.js';

export async function cd(newPath) {
	if (newPath.length === 0 || newPath.length > 1) {
		throw new Error(ERROR_MESSAGES.invalidInput);
	}

	const absolutePath = resolve(newPath[0]);
	try {
		const status = await stat(absolutePath);
		if (status.isDirectory()) {
			changeDirectory(absolutePath);
		}
	} catch {
		throw new Error(ERROR_MESSAGES.invalidInput);
	}
}
