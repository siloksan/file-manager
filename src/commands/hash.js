import crypto from 'node:crypto';
import { createReadStream } from 'node:fs';
import { ERROR_MESSAGES } from '#src/constants/const.js';

export async function hash(args) {
	if (args.length !== 1) {
		throw new Error(ERROR_MESSAGES.invalidInput);
	}

	return new Promise((res, rej) => {
		const hash = crypto.createHash('sha256');
		const [pathName] = args;
		const readStream = createReadStream(pathName);

		readStream.pipe(hash).on('finish', () => {
			console.log(hash.digest('hex'));
			res();
		});
		readStream.on('error', rej);
	});
}
