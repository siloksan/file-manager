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
		const handledContentList = contentList.map((item) => {
			if (item.isDirectory()) {
				return { name: item.name, type: 'directory' };
			} else if (item.isFile()) {
				return { name: item.name, type: 'file' };
			} else {
				return null;
			}
		});

		const filteredContentList = handledContentList.filter((item) => item !== null);
		const sortedContentList = filteredContentList.sort((a, b) => {
			if (a.type === 'directory' && b.type === 'file') {
				return -1;
			} else if (a.type === 'file' && b.type === 'directory') {
				return 1;
			} else {
				return a.name.localeCompare(b.name);
			}
		});

		console.table(sortedContentList);
	} catch (err) {
		throw new Error(`Cannot read directory: ${err.message}`);
	}
}
