function firstNonRepeatingLetter (str) {
  let lowerCase = str.toLowerCase();
 
 for(let i = 0; i < lowerCase.length; i++) {
   if(lowerCase.indexOf(lowerCase[i]) === lowerCase.lastIndexOf(lowerCase[i])) {
     return str[i];
   }
 }
 return '';
}