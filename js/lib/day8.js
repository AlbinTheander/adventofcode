import fs from 'fs';

export default function day8() {
  const data = fs.readFileSync('../data/day8.txt', 'utf-8');
  const decodedDiff = data.split('\n')
                   .map(getDecodedLengthDiff)
                   .reduce((a,b) => a+b);
  const encodedDiff = data.split('\n')
                          .map(getEncodedLengthDiff)
                          .reduce((a, b) => a+b);

  console.log('******* Day 8 *******');
  console.log('The difference in length is', decodedDiff, 'characters for decoded strings');
  console.log('The difference in length is', encodedDiff, 'characters for encoded strings.');
  console.log();
}

export function getDecodedLengthDiff(s) {
  return s.length - getDecodedLength(s);
}

export function getEncodedLengthDiff(s) {
  return getEncodedLength(s) - s.length;
}

function getDecodedLength(s) {
  return eval(s).length; // jshint ignore:line
}

function getEncodedLength(s) {
  var escapees = s.match(/\\|"/g);
  return s.length + (escapees ? escapees.length : 0) + 2;
}