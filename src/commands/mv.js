import { createReadStream, createWriteStream } from "node:fs";
import { mkdir, unlink } from "fs/promises";
import { join, sep } from "node:path";
import { pipeline } from "node:stream/promises";
import { ERROR_MESSAGES } from "#src/constants/const.js";

export async function mv(args) {
	if (args.length !== 2) {
		throw new Error(ERROR_MESSAGES.invalidInput);
	}

	const [sourcePath, targetDirectory] = args;
	const fileName = sourcePath.split(sep).pop();
	const destinationPath = join(targetDirectory, fileName);

	try {
		await mkdir(targetDirectory, { recursive: true });
		await pipeline(
			createReadStream(sourcePath),
			createWriteStream(destinationPath)
		);
		await unlink(sourcePath);
	} catch (error) {
		throw new Error(
			`Failed to move file: ${
				error instanceof Error ? error.message : String(error)
			}`
		);
	}
}
