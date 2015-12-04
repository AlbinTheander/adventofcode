import md5 from 'md5';


export default function day4() {
	console.log('**** Day 4 *****');
	console.log('Santa found the key after', findKey('yzbqklnj'), 'iterations.');
	console.log('Santa found the second key after', findKey('yzbqklnj', 6), 'iterations.');
	console.log();
}

export function findKey(s, nrOfZeroes = 5) {
	var n = 0;
	var zeroes = Array(nrOfZeroes+1).join('0');
	do {
		var checksum = md5(s+n);
		if (checksum.slice(0, nrOfZeroes) === zeroes) return n;
		n++;
	} while(true);
	return 0;
}