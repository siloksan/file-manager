import { isNullable } from "./validator.js";

export function checkArguments(userArg, commandArgument) {
	if (isNullable(userArg) && isNullable(commandArgument)) {
		return true;
	} else {
		return userArg === commandArgument;
	}
}
