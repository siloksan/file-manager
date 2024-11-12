import { createReadStream, createWriteStream } from 'node:fs';
import { mkdir, unlink } from 'fs/promises';
import { join, sep } from 'node:path';
import { pipeline } from 'node:stream/promises';
import { ERROR_MESSAGES } from '#src/constants/const.js';

export async function mv(args) {
	if (args.length !== 2) {
		console.log(ERROR_MESSAGES.invalidInput);
		return;
	}

	const [sourcePath, targetDirectory] = args;
	const fileName = sourcePath.split(sep).pop();
	const destinationPath = join(targetDirectory, fileName);

	try {
		await mkdir(targetDirectory, { recursive: true });
		await pipeline(createReadStream(sourcePath), createWriteStream(destinationPath));
		await unlink(sourcePath);
	} catch (error) {
		console.error(`Failed to move file: ${error.message}`);
	}
}
