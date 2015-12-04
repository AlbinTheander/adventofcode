
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

