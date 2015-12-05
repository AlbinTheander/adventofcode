function main() {
	for(var day = 1; day <= 25; day++) {
		try {
			let solution = require('./lib/day' + day);
			solution.default();
	    } catch(err) {
	     // Ignore. Life goes on...
	    }
	}
}



main();