import fs from 'fs';

export default function day5() {
  var data = fs.readFileSync('../data/day5.txt', 'utf-8');
  console.log('**** Day 5 *****');
  console.log('Santa has ', count(isNice, data), 'nice strings in his file.');
  console.log('Santa has ', count(isNicer, data), 'nicer strings in his file.');
  console.log();
}

function count(pred, data) {
  return data.split('\n').filter(pred).length;
}

export function isNice(s) {
  return /(.)\1/.test(s) &&
         /[aeiou].*[aeiou].*[aeiou]/.test(s) &&
         !/ab|cd|pq|xy/.test(s);
}

export function isNicer(s) {
  return /(.).\1/.test(s) &&
         /(..).*\1/.test(s);
}

