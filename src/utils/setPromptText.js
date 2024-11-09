import { getCurrentPath } from './getCurrentPath.js';

export function setPromptText(readline) {
	readline.setPrompt(`You are currently in ${getCurrentPath()}\n>`);
}
