/**
 * Given a command string and a list of command metadata, returns a function
 * that runs the command handler for the given command with the given arguments.
 *
 * @throws {Error} If the given command is invalid.
 * @throws {Error} If there is an error loading the handler for the given command.
 *
 * @param {string} command - The command string to run.
 * @param {Object} commandList - A dictionary of command metadata, where the keys
 * are the names of the commands and the values are objects containing metadata
 * about the commands. The metadata objects should contain the following
 * properties:
 *
 * - `name`: The name of the command.
 * - `arguments`?: An object describing the arguments of the command. The keys
 *   are the names of the arguments and the values are descriptions of the
 *   arguments.
 * - `route`: The path to the module that exports the command handler.
 *
 * @returns {Function} A function that runs the command handler for the given
 * command with the given arguments.
 */
export async function getCommandHandler(command, commandList) {
	const [commandName, ...args] = command.trim().split(' ');
	const commandInfo = commandList[commandName];

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
