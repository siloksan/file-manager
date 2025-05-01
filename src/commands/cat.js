import { createReadStream } from 'fs';
import { resolve } from 'path';
import { ERROR_MESSAGES } from '#src/constants/const.js';

export async function cat(pathName) {
	if (pathName.length !== 1) {
		console.log(ERROR_MESSAGES.invalidInput);
		return;
	}
	return new Promise((res, rej) => {
		const absolutePath = resolve(pathName[0]);
		const readStream = createReadStream(absolutePath);
		readStream.pipe(process.stdout);

		readStream.on('error', rej);
		readStream.on('end', res);
	});
}
