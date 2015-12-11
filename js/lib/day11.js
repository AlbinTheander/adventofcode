
const DIGITS = 'abcdefghijklmnopqrstuvwxyz';
const BASE = DIGITS.length;

export default function day11() {
  console.log('**** Day 11 *****');
  var next = nextPw('hepxcrrq');
  var nextNext = nextPw(next);
  console.log("Santa's next password is", next);
  console.log('And the one after that is', nextNext);
  console.log();
}

export function nextPw(pw) {
  let next = pw;
  do {
    next = increment(next);
  } while(!isValidPw(next));
  return next;
}

function increment(pw) {
  let digits = pw.split('').map(ch => DIGITS.indexOf(ch));
  let index = digits.length-1;
  let carry = 1;
  while(index >= 0 && carry > 0) {
    digits[index]++;
    carry = 0;
    if (digits[index] >= BASE) {
      digits[index] = 0;
      carry = 1;
      index--;
    }
  }
  return digits.map(n => DIGITS[n]).join('');
}

export function isValidPw(pw) {
  function containsStraight(pw) {
    let count = 0;
    let index = 0;
    while(count < 3 && index < pw.length) {
      if (pw.charCodeAt(index) === pw.charCodeAt(index-1)+1)
        count++;
      else
        count = 1;
      index++;
    }
    return count === 3;
  }
  return !/[iol]/.test(pw) &&
         /(.)\1.*(.)\2/.test(pw) &&
         containsStraight(pw);
}