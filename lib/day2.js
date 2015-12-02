
export function getPaper(boxes) {
	return boxes.split('\n')
	            .map(getAreaForBox)
	            .reduce((a,b) => a+b, 0);
}

export function getRibbon(boxes) {
	return boxes.split('\n')
	            .map(getRibbonForBox)
	            .reduce((a,b) => a+b, 0);
}

function getAreaForBox(box) {
	var [s1, s2, s3] = getSides(box);

	return 2*s1*s2 + 2*s1*s3 + 2*s2*s3 + s1*s2;
}

function getRibbonForBox(box) {
	var [s1, s2, s3] = getSides(box);

	return 2*s1 + 2*s2 + s1*s2*s3;
}


const getSides = box => box.split('x')
                           .map(Number)
                           .sort((a,b) => a-b);
