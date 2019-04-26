let greatesCD = (a, b) => {
  if(!b) { return a; }
  return gcd(b, a % b);
}

let leastCM = (d1, d2) => {
  return d1 * d2 / gcd(d1, d2);
}

let convertFrac = (arr) => {
  let denom = arr.reduce((a, b) => lcm(b[1], a), 1);
  return arr.map(a => `(${a[0]*(denom/a[1])},${a[1] * (denom/a[1])})`).join('');
}