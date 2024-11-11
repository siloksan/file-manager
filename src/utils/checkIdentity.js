import { isNullable } from './validator.js';

/**
 * Checks if user-provided argument matches the argument of the command.
 *
 * If either user-provided argument or command argument is null or undefined,
 * the function returns true. Otherwise, it checks if the two arguments are equal.
 *
 * @param {string} userArg - The argument provided by the user.
 * @param {string} commandArgument - The argument of the command.
 * @returns {boolean} true if the arguments match, false otherwise.
 */
export function checkArguments(userArg, commandArgument) {
	if (isNullable(userArg) && isNullable(commandArgument)) {
		return true;
	} else {
		return userArg === commandArgument;
	}
}
