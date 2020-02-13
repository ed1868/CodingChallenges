countLettersAndDigits = input => {
  let counter = 0;
  for (var i = 0; i < input.length; i++) {
    if (input[i].match(/^[0-9a-zA-Z]+$/)) {
      counter += 1;
    }
  }
  return counter;
};
