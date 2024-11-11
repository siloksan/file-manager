import { getCurrentPath } from './get-current-path.js';

export function setPromptText(readline) {
	readline.setPrompt(`You are currently in ${getCurrentPath()}\n>`);
}
