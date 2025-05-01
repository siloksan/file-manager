import { resolve } from 'path';
import { getCurrentPath } from '#src/utils/index.js';
import { changeDirectory } from '#src/handlers/index.js';
import { ERROR_MESSAGES } from '#src/constants/const.js';

export function up(args) {
	if (args.length > 0) {
		console.log(ERROR_MESSAGES.invalidInput);
		return;
	}

	const currentPath = getCurrentPath();
	const parentPath = resolve(currentPath, '..');

	if (parentPath === currentPath) {
		return;
	}

	changeDirectory(parentPath);
}
