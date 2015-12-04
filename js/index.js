function main() {
	for(var day = 1; day <= 3; day++) {
		let solution = require('./lib/day' + day);
		solution.default();
	}
}



main();