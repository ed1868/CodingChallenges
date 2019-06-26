function partsSums(ls) {
  ls.unshift(0);
  let sum = ls.reduce((p, c) => p + c, 0);
  return ls.map(v => (sum = sum - v));
}

partsSums = (ls) => {
  let arr = [0];

  let reverseArr = ls.reverse();

  for(let i =0; i < ls.length; i++) {

    arr.push(arr[arr.length - 1] + ls[i]);

  }

  return arr.reverse();
}