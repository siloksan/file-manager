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
