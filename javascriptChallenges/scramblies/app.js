// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered
// Input strings s1 and s2 are null terminated.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

//MY FIRST SOLUTION DID NOT HAVE ANY ERROS BUT THE SETTIME OUT TIME WAS TOO LONG FOR CODE WARS EVEN THOUGH IT GAVE THE RIGHT RESULT 

//---- FIRST SOLUTION ----//
function scramble(str1, str2) {
  let counter = 0;
  let strOneSplit =str1.split('');
  let strTwoSplit = str2.split('');


for(let i=0; i < strTwoSplit.length; i++){
  let index = strOneSplit.indexOf(strTwoSplit[i]);
  if(strOneSplit.includes(strTwoSplit[i])){
    counter++
    strOneSplit.splice(index,1);
  }else{
    counter--;
  }
}

if(counter == str2.length){
  return true;
} else{
  return false;
}

  }


  //SOLUTION TWO THAT WORKED -----////
  function scramble(str1, str2) {
    var obj={};
    for(let i=0; i<str1.length; i++){
      !obj[str1[i]] ? obj[str1[i]]=1 : obj[str1[i]]++;
    }
    for(let a =0; a <str2.length; a++){
      if(!obj[str2[a]]){
         return false;
      }else{
         obj[str2[a]]--;
      }
    }
    return true;
  }