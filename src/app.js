import { AppRunner } from '#src/command/index.js';
import { errorHandler } from '#src/utils/index.js';

const startApp = new AppRunner();

try {
	startApp.execute();
} catch (error) {
	errorHandler(error);
}
