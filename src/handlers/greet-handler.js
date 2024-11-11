/**
 * Handles greeting by logging a welcome message with the given name.
 *
 * @param {string} name - The name of the user to greet.
 */
export function greetHandler(name) {
	if (typeof name !== 'string') {
		throw new Error('Invalid username!');
	}
	console.log(`Welcome to the File Manager, ${name}!`);
}
