 reverseWords = str => {
  // Go for it
let finalArr = [];

let arrSplit = str.split(' ');

for(let i = 0; i < arrSplit.length; i++){
  let letterSplit = arrSplit[i].split('');
  let letterJoin = letterSplit.join('');
  let wordJoin = letterJoin.split('').reverse();
  let final = wordJoin.join('');
  
  finalArr.push(final);
}

let result = finalArr.join(' ');


return result;

}