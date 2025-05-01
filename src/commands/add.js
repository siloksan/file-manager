import { appendFile } from "fs/promises";
import { ERROR_MESSAGES } from "#src/constants/const.js";

export async function add(pathName) {
	if (pathName.length !== 1) {
		throw new Error(ERROR_MESSAGES.invalidInput);
	}

	try {
		await appendFile(pathName[0], "");
	} catch (error) {
		throw new Error(`Cannot add file: ${error.message}`);
	}
}
