

export function product(...xs) {
  if (Array.isArray(xs[0])) xs = xs[0];
  return xs.reduce((x,y) => x*y, 1);
}

export function sum(...xs) {
  if (Array.isArray(xs[0])) xs = xs[0];
  return xs.reduce((x,y) => x+y, 0);
}

export function getPrimes(max) {
  var sieve = Array(max);
  for(let i = 0; i < sieve.length; i++)
    sieve[i] = i;
  sieve[0] = sieve[1] = false;
  let p = 2;
  while (p < sieve.length) {
    if (sieve[p])
      for(var i = 2*p; i < sieve.length; i += p)
        sieve[i] = false;
    p++;
  }
  return sieve.filter(v => v !== false);
}