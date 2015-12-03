
export function countHouses(path, nrOfSantas=1) {
	const houses = new Set()
	const addHouseAt = (x,y) => houses.add(x + '-' + y);
	let santas = Array(...Array(nrOfSantas)).map(_=> ({x:0, y:0}));
	addHouseAt(0,0);

	path.split('').reduce((santas, dir) => {
		const x = santas[0].x + getDx(dir);
		const y = santas[0].y + getDy(dir);
		addHouseAt(x, y);
		return santas.slice(1).concat({x,y});
	}, santas);

	return houses.size;
}

const getDx = arrow => arrow === '>' ? 1 : 
                       arrow === '<' ? -1 :
                       0;
const getDy = arrow => arrow === '^' ? 1 :
                       arrow === 'v' ? -1 :
                       0;
