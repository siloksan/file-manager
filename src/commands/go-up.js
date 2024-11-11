import { resolve } from 'path';
import { getCurrentPath } from '#src/utils/index.js';
import { changeDirectory } from '#src/handlers/index.js';

export function goUp(args) {
	if (args.length > 0) {
		throw new Error("This command don't have arguments!");
	}

	const currentPath = getCurrentPath();
	console.log('currentPath: ', currentPath);
	const parentPath = resolve(currentPath, '..');

	if (parentPath === currentPath) {
		return;
	}

	changeDirectory(parentPath);
}
