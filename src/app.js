import { AppRunner } from '#src/services/index.js';
import { errorHandler } from '#src/handlers/index.js';

export const app = new AppRunner();

try {
	app.execute();
} catch (error) {
	errorHandler(error);
}
