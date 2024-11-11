import { homedir } from 'node:os';

export function getHomeDirectory() {
	return homedir();
}
