function alphabetPosition(text) {
  let alpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];

  let result = [];

  let trash = [];

  let textSplit = text.toLowerCase().split("");

  textSplit.map(letter => {
    if (alpha.includes(letter)) {
      let letterNumber = alpha.indexOf(letter);

      result.push(letterNumber + 1);
    } else {
      trash.push(this.letterNumber);
    }
  });

  return result.join(" ");
}
