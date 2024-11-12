import { ERROR_MESSAGES, OS_ARGUMENTS } from '#src/constants/const.js';
import { getCommandHandler } from '#src/utils/index.js';
// import { eol } from '#src/commands/os/index.js';

export async function os(args) {
	if (args.length !== 1) {
		console.log(ERROR_MESSAGES.invalidInput);
		return;
	}

	const [command] = args;
	// switch (command) {
	// 	case OS_ARGUMENTS.EOL:
	// 		return eol;
	// 	default:
	// 		break;
	// }
	try {
		const handler = await getCommandHandler(command, OS_ARGUMENTS);
		if (typeof handler === 'function') {
			return handler();
		}
	} catch (error) {
		throw new Error(`${error.message}`);
	}
}
