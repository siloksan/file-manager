import { mkdir as mkdirAsync } from "fs/promises";
import { ERROR_MESSAGES } from "#src/constants/const.js";

export async function mkdir(dirName) {
	if (dirName.length !== 1) {
		throw new Error(ERROR_MESSAGES.invalidInput);
	}

	try {
		await mkdirAsync(dirName[0], { recursive: true });
	} catch (error) {
		throw new Error(`Error creating directory: ${error.message}`);
	}
}
