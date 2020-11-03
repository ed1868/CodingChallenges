removeChar = (str) => {
  //You got this!

  let arr = str.split("");
  arr.splice(0, 1);
  arr.splice(arr.length - 1, 1);

  return arr.join("");
};

removeChar("PINGASON");
