import os from 'node:os';

export function homedir() {
	console.log('Home directory:', os.homedir());
}
