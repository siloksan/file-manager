const COMMAND_FOLDERS = 'commands';
const OS_COMMAND_FOLDERS = 'os';

export const OS_ARGUMENTS = {
	'--EOL': { name: 'eol', route: `../${COMMAND_FOLDERS}/${OS_COMMAND_FOLDERS}/eol.js` },
	'--cpus': { name: 'cpus', route: `../${COMMAND_FOLDERS}/${OS_COMMAND_FOLDERS}/cpus.js` },
	'--homedir': { name: 'homedir', route: `../${COMMAND_FOLDERS}/${OS_COMMAND_FOLDERS}/homedir.js` },
	'--username': { name: 'username', route: `../${COMMAND_FOLDERS}/${OS_COMMAND_FOLDERS}/username.js` },
	'--architecture': { name: 'architecture', route: `../${COMMAND_FOLDERS}/${OS_COMMAND_FOLDERS}/architecture.js` },
};

export const LIST_OF_COMMANDS = {
	up: { arguments: null, name: 'up', route: `../${COMMAND_FOLDERS}/up.js` },
	cd: { arguments: 'pathName', name: 'cd', route: `../${COMMAND_FOLDERS}/cd.js` },
	ls: { arguments: null, name: 'ls', route: `../${COMMAND_FOLDERS}/ls.js` },
	cat: { arguments: 'fileName', name: 'cat', route: `../${COMMAND_FOLDERS}/cat.js` },
	add: { arguments: 'fileName', name: 'add', route: `../${COMMAND_FOLDERS}/add.js` },
	mkdir: { arguments: 'dirName', name: 'mkdir', route: `../${COMMAND_FOLDERS}/mkdir.js` },
	hash: { arguments: 'pathName', name: 'hash', route: `../${COMMAND_FOLDERS}/hash.js` },
	compress: {
		arguments: {
			pathName: 'sourcePath',
			newName: 'destPath',
		},
		name: 'compress',
		route: `../${COMMAND_FOLDERS}/compress.js`,
	},
	decompress: {
		arguments: {
			pathName: 'sourcePath',
			newName: 'destPath',
		},
		name: 'decompress',
		route: `../${COMMAND_FOLDERS}/decompress.js`,
	},
	rn: {
		arguments: {
			pathName: 'pathName',
			newName: 'newName',
		},
		name: 'rn',
		route: `../${COMMAND_FOLDERS}/rn.js`,
	},
	cp: {
		arguments: {
			sourcePath: 'pathName',
			destinationDirectory: 'pathName',
		},
		name: 'cp',
		route: `../${COMMAND_FOLDERS}/cp.js`,
	},
	mv: {
		arguments: {
			sourcePath: 'pathName',
			destinationDirectory: 'pathName',
		},
		name: 'mv',
		route: `../${COMMAND_FOLDERS}/mv.js`,
	},
	rm: { arguments: 'pathName', name: 'rm', route: `../${COMMAND_FOLDERS}/rm.js` },
	os: {
		arguments: OS_ARGUMENTS,
		name: 'os',
		route: `../${COMMAND_FOLDERS}/os.js`,
	},
};

export const ERROR_MESSAGES = {
	invalidInput: 'Invalid input',
};
