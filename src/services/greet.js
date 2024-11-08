import { greetHandler } from '#src/handlers/index.js';
import { getUsername } from '#src/utils/index.js';
import { argv } from 'node:process';

/**
 * Greets the user with a given name.
 *
 * @throws {Error} If the `--username` option is not provided.
 * @throws {Error} If too many arguments are provided.
 *
 * Example: `npm run start -- --username=John`
 */
export function greet() {
	const EXAMPLE = 'npm run start -- --username=John';

	if (argv.length < 3) {
		throw new Error(`Write your name! Example: "${EXAMPLE}"`);
	}

	if (argv.length > 3) {
		throw new Error(`Too many arguments! Example: "${EXAMPLE}"`);
	}

	const name = getUsername(argv);

	greetHandler(name);
}
