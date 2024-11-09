import { changeDirectory } from '#src/command/index.js';
import { getHomeDirectory } from '#src/utils/index.js';
import { greet } from './greet.js';

export function initializeApp(userInterface) {
	try {
		greet();
		changeDirectory(getHomeDirectory());
		userInterface.updatePromptText();
	} catch (error) {
		throw new Error(`File manager is not initialized. ${error.message}`);
	}
	return true;
}
