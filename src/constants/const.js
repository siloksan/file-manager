const COMMAND_FOLDERS = 'commands';

export const LIST_OF_COMMANDS = {
	up: { arguments: null, name: 'up', route: `../${COMMAND_FOLDERS}/up.js` },
	cd: { arguments: 'pathName', name: 'cd', route: `../${COMMAND_FOLDERS}/cd.js` },
	ls: { arguments: null, name: 'ls', route: `../${COMMAND_FOLDERS}/ls.js` },
	cat: { arguments: 'fileName', name: 'cat', route: `../${COMMAND_FOLDERS}/cat.js` },
	add: { arguments: 'fileName', name: 'add', route: `../${COMMAND_FOLDERS}/add.js` },
	mkdir: { arguments: 'dirName', name: 'mkdir', route: `../${COMMAND_FOLDERS}/mkdir.js` },
};

export const ERROR_MESSAGES = {
	invalidInput: 'Invalid input',
};
