import os from 'node:os';

export function eol() {
	console.log('default system End-Of-Line (EOL) is:', JSON.stringify(os.EOL));
}
