import os from 'node:os';

export function username() {
	console.log('System user name:', os.userInfo().username);
}
