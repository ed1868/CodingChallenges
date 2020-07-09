decipherThis = (str) => {
  //the first letter is replaced by its character code (e.g. H becomes 72)
  let arr = str.split(" ");
  let newStr = "";
  for (var i = 0; i < arr.length; i++) {
    let firstLetter = "";
    let currentWord = arr[i].split("");
    currentWord.map((letter) => {
      if (isNaN(letter) == false) {
        firstLetter += letter;
      }
    });
    let tranny = String.fromCharCode(firstLetter);
    currentWord.splice(0, firstLetter.length, tranny);
    newStr += `${currentWord.join("")} `;
  }

  // The second and the last letter is switched
  let another = [];
  let hybrid = newStr.split(" ");
  hybrid.pop();
  hybrid.map((word) => {
    let wordarr = word.split("");
    let secondLetter = wordarr[1];
    let lastLetter = wordarr[wordarr.length - 1];

    wordarr[1] = lastLetter;
    wordarr[wordarr.length - 1] = secondLetter;

    another += `${wordarr.join("")} `;
  });

  let result = another.split(" ");

  result.pop();

  return result.join(" ");
};
