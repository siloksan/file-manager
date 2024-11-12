import os from 'node:os';

export function architecture() {
	console.log('CPU architecture:', os.arch());
}
