simpleArraySum = ar => {
  /*
   * Write your code here.
   */

  let counter = 0;

  ar.map(number => {
    counter += number;
  });

  return counter;
};
