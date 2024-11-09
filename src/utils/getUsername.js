/**
 * Extracts the username from the command line arguments.
 *
 * @param {string[]} args - An array of command line arguments.
 * @returns {string|undefined} The username if found, otherwise undefined.
 */
export function getUsername(args) {
	const username = args.find((arg) => arg.startsWith('--username='));
	if (username) {
		return username.split('=')[1];
	}
}
