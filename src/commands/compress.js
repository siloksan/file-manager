import { createWriteStream, createReadStream } from "node:fs";
import { createBrotliCompress } from "node:zlib";
import { pipeline } from "node:stream/promises";
import { ERROR_MESSAGES } from "#src/constants/const.js";

export async function compress(args) {
	if (args.length !== 2) {
		console.log(ERROR_MESSAGES.invalidInput);
		return;
	}

	const [sourcePath, destinationPath] = args;

	try {
		const compress = createBrotliCompress();
		const readStream = createReadStream(sourcePath);
		await new Promise((resolve, reject) => {
			readStream.once("open", resolve);
			readStream.once("error", reject);
		});

		const writeStream = createWriteStream(destinationPath);

		await pipeline(readStream, compress, writeStream);
	} catch (err) {
		throw new Error(`Error compressing file: ${err.message}`);
	}
}
