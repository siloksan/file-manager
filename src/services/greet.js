import { greetHandler } from "#src/handlers/index.js";
import { getUsername } from "#src/utils/index.js";
import { argv } from "node:process";

export function greet() {
	const EXAMPLE = "npm run start -- --username=John";

	if (argv.length < 3) {
		throw new Error(`Write your name! Example: "${EXAMPLE}"`);
	}

	if (argv.length > 3) {
		throw new Error(`Too many arguments! Example: "${EXAMPLE}"`);
	}

	const name = getUsername(argv);

	greetHandler(name);
}
