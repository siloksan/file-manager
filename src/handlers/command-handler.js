import { getCommandHandler } from '#src/utils/index.js';
import { errorHandler } from '#src/handlers/index.js';
import { LIST_OF_COMMANDS } from '#src/constants/const.js';

export async function commandHandler(command) {
	try {
		const handler = await getCommandHandler(command, LIST_OF_COMMANDS);
		if (typeof handler !== 'function') {
			return;
		}
		await handler();
	} catch (error) {
		errorHandler(`Operation failed: ${error.message}`);
	}
}
