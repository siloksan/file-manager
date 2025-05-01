import { createReadStream, createWriteStream, promises as fsPromises } from 'node:fs';
import { join, sep } from 'node:path';
import { pipeline } from 'node:stream/promises';
import { ERROR_MESSAGES } from '#src/constants/const.js';

export async function cp(args) {
	if (args.length !== 2) {
		throw new Error(ERROR_MESSAGES.invalidInput);
	}

	const [sourcePath, targetDirectory] = args;

	const fileName = sourcePath.split(sep).pop();
	const destinationPath = join(targetDirectory, `${fileName}-cp`);

	try {
		const readStream = createReadStream(sourcePath);
		await new Promise((resolve, reject) => {
			readStream.once('open', resolve);
			readStream.once('error', reject);
		});

		await fsPromises.mkdir(targetDirectory, { recursive: true });

		const writeStream = createWriteStream(destinationPath);

		await pipeline(readStream, writeStream);
	} catch (error) {
		throw new Error(`Error copying file: ${error instanceof Error ? error.message : String(error)}`);
	}
}
