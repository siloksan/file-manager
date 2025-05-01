import { unlink } from "fs/promises";
import { ERROR_MESSAGES } from "#src/constants/const.js";

export async function rm(args) {
	if (args.length !== 1) {
		throw new Error(ERROR_MESSAGES.invalidInput);
	}

	const [pathName] = args;

	try {
		await unlink(pathName);
	} catch (error) {
		throw new Error(`Failed to remove file: ${error.message}`);
	}
}
