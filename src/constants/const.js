const COMMAND_FOLDERS = 'commands';

export const LIST_OF_COMMANDS = {
	cat: { arguments: undefined, name: 'catFile', route: '/command/cat-file.js' },
	up: { arguments: undefined, name: 'goUp', route: `../${COMMAND_FOLDERS}/go-up.js` },
};
