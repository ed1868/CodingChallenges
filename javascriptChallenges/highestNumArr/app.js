largestOfFour = (arr) => {
  let result = [];

  arr.map((currentArr) => {
    let counter = 0;
    for (i = 0; i < currentArr.length; i++) {
      if (currentArr[i] > counter) {
        counter = currentArr[i];
      }
    }

    result.push(counter);
  });

  return result;
};


largestOfFour([
  [13, 27, 18, 26],
  [4, 5, 1, 3],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
// should return [27, 5, 39, 1001]
