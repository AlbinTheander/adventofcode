function main() {
	for(var day = 1; day <= 25; day++) {
		try {
			let solution = require('./lib/day' + day);
			solution.default();
	    } catch(err) {
        if (err.code !== 'MODULE_NOT_FOUND')
          throw err;
	    }
	}
}



main();