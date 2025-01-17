import { readdir } from 'node:fs/promises';
import { ERROR_MESSAGES } from '#src/constants/const.js';
import { getCurrentPath } from '#src/utils/index.js';

export async function ls(args) {
	if (args.length > 0) {
		console.log(ERROR_MESSAGES.invalidInput);
		return;
	}

	const currentPath = getCurrentPath();

	try {
		const contentList = await readdir(currentPath, { withFileTypes: true });
		const files = [];
		const directories = [];

		for (const item of contentList) {
			if (item.isDirectory()) {
				directories.push({ name: item.name, type: 'directory' });
			} else if (item.isFile()) {
				files.push({ name: item.name, type: 'file' });
			}
		}

		const sortedDirectories = directories.toSorted((a, b) => a.name.localeCompare(b.name));
		const sortedFiles = files.toSorted((a, b) => a.name.localeCompare(b.name));
		const table = [...sortedDirectories, ...sortedFiles];

		console.table(table);
	} catch (err) {
		throw new Error(`Cannot read directory: ${err.message}`);
	}
}
