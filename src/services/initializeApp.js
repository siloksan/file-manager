import { changeDirectory } from '#src/handlers/index.js';
import { getHomeDirectory } from '#src/utils/index.js';
import { greet } from './greet.js';

export function initializeApp() {
	try {
		greet();
		changeDirectory(getHomeDirectory());
	} catch (error) {
		throw new Error(`File manager is not initialized. ${error.message}`);
	}
	return true;
}
