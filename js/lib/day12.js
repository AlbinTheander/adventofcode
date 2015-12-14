import {readFileSync} from 'fs';

export default function day12() {
  const s = readFileSync('../data/day12.txt', 'utf-8');
  const numbers = findNumbers(s);
  const sum = numbers.reduce((a,b) => a+b, 0);
  const o = JSON.parse(s);
  const sum2 = sumAll(o);

  console.log('******* Day 12 *******');
  console.log("The sum of numbers in Santa's json is", sum);
  console.log("The sum of nun-red numbers are", sum2);
  console.log();
}


export function findNumbers(s) {
  var numbers = s.match(/-?\d+/g);
  return numbers ? numbers.map(Number) : [];
}

export function sumAll(o) {
  if (!o) return 0;
  if (typeof o === 'number') return o;
  if (typeof o === 'string') return 0;
  if (Array.isArray(o))
    return o.reduce((s, e) => s + sumAll(e), 0);
  if (typeof o === 'object') {
    var result = 0;
    for (let p in o) {
      if (o[p] === 'red') return 0;
      result += sumAll(o[p]);
    }
    return result;
  }
}