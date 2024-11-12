import { createWriteStream, createReadStream } from 'fs';
import { createBrotliDecompress } from 'node:zlib';
import { pipeline } from 'stream/promises';
import { ERROR_MESSAGES } from '#src/constants/const.js';

export async function decompress(args) {
	if (args.length !== 2) {
		console.log(ERROR_MESSAGES.invalidInput);
		return;
	}

	const [sourcePath, destinationPath] = args;

	const compress = createBrotliDecompress();
	const readStream = createReadStream(sourcePath);
	const writeStream = createWriteStream(destinationPath);

	try {
		await pipeline(readStream, compress, writeStream);
	} catch (err) {
		throw new Error(`Error decompressing file: ${err.message}`);
	}
}
