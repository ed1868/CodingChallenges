function wordsToMarks(string){
  let counter = 0;
  string.split('').map(letter => {
    counter += letter.charCodeAt(0) - 96;
  });
return counter;
}