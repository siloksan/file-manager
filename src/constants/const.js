const COMMAND_FOLDERS = 'commands';

export const LIST_OF_COMMANDS = {
	up: { arguments: null, name: 'up', route: `../${COMMAND_FOLDERS}/up.js` },
	cd: { arguments: 'pathName', name: 'cd', route: `../${COMMAND_FOLDERS}/cd.js` },
	ls: { arguments: null, name: 'ls', route: `../${COMMAND_FOLDERS}/ls.js` },
	cat: { arguments: 'pathName', name: 'cat', route: `../${COMMAND_FOLDERS}/cat.js` },
	add: { arguments: 'pathName', name: 'add', route: `../${COMMAND_FOLDERS}/add.js` },
};

export const ERROR_MESSAGES = {
	invalidInput: 'Invalid input',
};