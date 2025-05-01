export function greetHandler(name) {
	if (typeof name !== "string") {
		throw new Error("Invalid username!");
	}
	console.log(`Welcome to the File Manager, ${name}!`);
}
