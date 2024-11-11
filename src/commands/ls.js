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
			const type = item.isDirectory() ? 'directory' : 'file';
			const cell = { name: item.name, type };
			if (item.isDirectory()) {
				directories.push(cell);
			} else {
				files.push(cell);
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
