import { getUsername } from '#src/utils/index.js';
import { argv } from 'node:process';

export function goodbye() {
	const username = getUsername(argv);

	console.log(`Thank you for using File Manager, ${username}, goodbye!`);
}
