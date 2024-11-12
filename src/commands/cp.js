import { createReadStream, createWriteStream } from 'node:fs';
import { join } from 'node:path';
import { promises as fs } from 'node:fs';
import { pipeline } from 'stream/promises';
import { ERROR_MESSAGES } from '#src/constants/const.js';

export async function cp(args) {
	if (args.length !== 2) {
		console.log(ERROR_MESSAGES.invalidInput);
		return;
	}

	const [sourcePath, targetDirectory] = args;

	const fileName = sourcePath.split('/').pop();
	const destinationPath = join(targetDirectory, fileName);

	try {
		await fs.mkdir(targetDirectory, { recursive: true });
		await pipeline(createReadStream(sourcePath), createWriteStream(destinationPath));
	} catch (error) {
		throw new Error(`Error copying file: ${error.message}`);
	}
}
