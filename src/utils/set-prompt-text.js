import { getCurrentPath } from "./get-current-path.js";
import os from "node:os";

export function setPromptText(readline) {
	readline.setPrompt(`You are currently in ${getCurrentPath()}${os.EOL}>`);
}
