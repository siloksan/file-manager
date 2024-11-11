import { getCommandHandler } from '#src/utils/index.js';
import { errorHandler } from '#src/handlers/index.js';

export async function commandHandler(command) {
	try {
		const handler = await getCommandHandler(command);
		if (typeof handler !== 'function') {
			return;
		}
		await handler();
	} catch (error) {
		errorHandler(`Operation failed: ${error.message}`);
	}
}
