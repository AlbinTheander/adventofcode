import fs from 'fs';

export default function day16() {
  var data = fs.readFileSync('../data/day16.txt', 'utf-8');
  var aunties = data.split('\n').map(s => new Auntie(s));

  var baseCheck = match().
                  exactly(3, 'children').
                  exactly(2, 'samoyeds').
                  exactly(0, 'akitas').
                  exactly(0, 'vizslas').
                  exactly(1, 'perfumes').
                  exactly(2, 'cars');

  var firstCheck = baseCheck.
                   exactly(7, 'cats').
                   exactly(3, 'pomeranians').
                   exactly(5, 'goldfish').
                   exactly(3, 'trees');

  var secondCheck = baseCheck.
                    moreThan(7, 'cats').
                    moreThan(3, 'trees').
                    lessThan(3, 'pomeranians').
                    lessThan(5, 'goldfish');

  var firstAunties = aunties.filter(firstCheck);
  var secondAunties = aunties.filter(secondCheck);
  console.log('******* Day 16 *******');
  console.log('The first search found', firstAunties[0]);
  console.log('The scond search found', secondAunties[0]);
  console.log();
}

export function Auntie(s) {
  var [_, name, p1, v1, p2, v2, p3, v3] =
  s.match(/(Sue \d+): (\w+): (\w+), (\w+): (\w+), (\w+): (\w+)/);
  return {
    name, [p1]: Number(v1), [p2]: Number(v2), [p3]: Number(v3)
  };
}

export function match() {
  const tester = function(tests = []) {
    var check = function(o) {
      return tests.every(test => test(o));
    };
    check.exactly = function(n, prop) {
      return tester(tests.concat((o) => o[prop] === undefined || o[prop] === n));
    };
    check.lessThan = function(n, prop) {
      return tester(tests.concat((o) => o[prop] === undefined || o[prop] < n));
    };
    check.moreThan = function(n, prop) {
      return tester(tests.concat((o) => o[prop] === undefined || o[prop] > n));
    };
    return check;
  };
  return tester();
}
