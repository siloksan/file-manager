export function getUsername(args) {
	const username = args.find((arg) => arg.startsWith('--username='));
	if (username) {
		return username.split('=')[1];
	}
}
