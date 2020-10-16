removeBMW = (str) => {
  //TO DO
  let result = [];
  let trash = [];
  let arr = str.toLowerCase().split("");
  console.log(`----${arr}----`);
  arr.map((letter) => {
    if (letter == "b" || letter == "m" || letter == "w") {
      trash.push(letter);
    } else {
      result.push(letter);
    }
  });

  console.log(`The Result Is : ${result.join("")}`);

  return result.join("");
};

removeBMW("bmwvolvoBMW");
