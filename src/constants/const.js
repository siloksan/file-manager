const COMMANDS_FOLDER = 'commands';
const OS_COMMANDS_FOLDER = 'os';

export const OS_ARGUMENTS = {
	'--EOL': { name: 'eol', route: `../${COMMANDS_FOLDER}/${OS_COMMANDS_FOLDER}/eol.js` },
	'--cpus': { name: 'cpus', route: `../${COMMANDS_FOLDER}/${OS_COMMANDS_FOLDER}/cpus.js` },
	'--homedir': { name: 'homedir', route: `../${COMMANDS_FOLDER}/${OS_COMMANDS_FOLDER}/homedir.js` },
	'--username': { name: 'username', route: `../${COMMANDS_FOLDER}/${OS_COMMANDS_FOLDER}/username.js` },
	'--architecture': { name: 'architecture', route: `../${COMMANDS_FOLDER}/${OS_COMMANDS_FOLDER}/architecture.js` },
};

export const LIST_OF_COMMANDS = {
	up: { arguments: null, name: 'up', route: `../${COMMANDS_FOLDER}/up.js` },
	cd: { arguments: 'pathName', name: 'cd', route: `../${COMMANDS_FOLDER}/cd.js` },
	ls: { arguments: null, name: 'ls', route: `../${COMMANDS_FOLDER}/ls.js` },
	cat: { arguments: 'fileName', name: 'cat', route: `../${COMMANDS_FOLDER}/cat.js` },
	add: { arguments: 'fileName', name: 'add', route: `../${COMMANDS_FOLDER}/add.js` },
	mkdir: { arguments: 'dirName', name: 'mkdir', route: `../${COMMANDS_FOLDER}/mkdir.js` },
	hash: { arguments: 'pathName', name: 'hash', route: `../${COMMANDS_FOLDER}/hash.js` },
	compress: {
		arguments: {
			pathName: 'sourcePath',
			newName: 'destPath',
		},
		name: 'compress',
		route: `../${COMMANDS_FOLDER}/compress.js`,
	},
	decompress: {
		arguments: {
			pathName: 'sourcePath',
			newName: 'destPath',
		},
		name: 'decompress',
		route: `../${COMMANDS_FOLDER}/decompress.js`,
	},
	rn: {
		arguments: {
			pathName: 'pathName',
			newName: 'newName',
		},
		name: 'rn',
		route: `../${COMMANDS_FOLDER}/rn.js`,
	},
	cp: {
		arguments: {
			sourcePath: 'pathName',
			destinationDirectory: 'pathName',
		},
		name: 'cp',
		route: `../${COMMANDS_FOLDER}/cp.js`,
	},
	mv: {
		arguments: {
			sourcePath: 'pathName',
			destinationDirectory: 'pathName',
		},
		name: 'mv',
		route: `../${COMMANDS_FOLDER}/mv.js`,
	},
	rm: { arguments: 'pathName', name: 'rm', route: `../${COMMANDS_FOLDER}/rm.js` },
	os: {
		arguments: OS_ARGUMENTS,
		name: 'os',
		route: `../${COMMANDS_FOLDER}/os.js`,
	},
};

export const ERROR_MESSAGES = {
	invalidInput: 'Invalid input',
};
