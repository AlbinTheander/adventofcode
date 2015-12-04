import fs from 'fs';

export function finalFloor(s) {
	return s.split('').
	       reduce((count, ch) => count + (ch === '(' ? 1 : -1), 0);
}

export function firstTimeInBasement(s) {
	var floor = 0;
	var step = 0;
	while(floor >= 0 && step < s.length) {
		var ch = s.charAt(step);
		floor += ch === '(' ? 1 : -1;
		step++;
	}
	return step;
}

export default function day1() {
	var data = fs.readFileSync('../data/day1.txt', 'utf-8');
	console.log('**** Day 1 *****');
	console.log('Santa ends up on floor', finalFloor(data));
	console.log('He first enters the basement on step', firstTimeInBasement(data));
	console.log();
}