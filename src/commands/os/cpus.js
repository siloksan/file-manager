import os from 'node:os';

export function cpus() {
	const cpus = os.cpus().map((cpu) => {
		const { model, speed } = cpu;
		return { model, 'clock rate': (speed / 1000).toFixed(2) + ' GHz' };
	});
	console.log('overall amount of CPUS:', cpus.length, '\n');
	console.table(cpus);
}
