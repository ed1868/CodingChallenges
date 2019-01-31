var palindromeChainLength = function(n,counter = 0) {
  palindromChecker = (num) => {
    return num.toString() === num.toString().split('').reverse().join('');
  }

  numReverse = (num) => {
    return Number(num.toString().split('').reverse().join(''));
  }

  if(palindromChecker(n)){
    return counter;
  } else {
    counter++;
    return palindromeChainLength((n + numReverse(n)), counter);
  }
};