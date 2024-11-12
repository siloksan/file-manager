import { createWriteStream, createReadStream } from 'fs';
import { createBrotliCompress } from 'node:zlib';
import { pipeline } from 'stream/promises';
import { ERROR_MESSAGES } from '#src/constants/const.js';

export async function compress(args) {
	if (args.length !== 2) {
		console.log(ERROR_MESSAGES.invalidInput);
		return;
	}

	const [sourcePath, destinationPath] = args;

	const compress = createBrotliCompress();
	const readStream = createReadStream(sourcePath);
	const writeStream = createWriteStream(destinationPath);

	try {
		await pipeline(readStream, compress, writeStream);
	} catch (err) {
		throw new Error(`Error compressing file: ${err.message}`);
	}
}
