import { LIST_OF_COMMANDS } from '#src/constants/const.js';

/**
 * Loads the command handler for the given command.
 *
 * @throws {Error} If the command does not exist.
 * @throws {Error} If the command handler is not a function.
 * @throws {Error} If the command handler cannot be loaded.
 *
 * @param {string} command - The command to load the handler for.
 * @returns {Promise<Function>} The loaded command handler.
 */
export async function getCommandHandler(command) {
	const [commandName, ...args] = command.trim().split(' ');
	const commandInfo = LIST_OF_COMMANDS[commandName];

	if (!commandInfo) {
		console.log(`Invalid input: ${command}`);
		return;
	}

	try {
		const handlerModule = await import(commandInfo.route);
		const handler = handlerModule[commandInfo.name];

		return () => handler(args);
	} catch (error) {
		throw new Error(`Error loading handler for ${command}: ${error.message}`);
	}
}
