// Background
// We all know about "balancing parentheses" (plus brackets, braces and chevrons) and even balancing characters that are identical.

// Read that last sentence again, I balanced different characters and identical characters twice and you didn't even notice... :)

// Kata
// Your challenge in this kata is to write a piece of code to validate that a supplied string is balanced.

// You must determine if all that is open is then closed, and nothing is closed which is not already open!

// You will be given a string to validate, and a second string, where each pair of characters defines an opening and closing sequence that needs balancing.

// You may assume that the second string always has an even number of characters.

// Example
// // In this case '(' opens a section, and ')' closes a section
// isBalanced("(Sensei says yes!)", "()")       // => True
// isBalanced("(Sensei says no!", "()")         // => False

// // In this case '(' and '[' open a section, while ')' and ']' close a section
// isBalanced("(Sensei [says] yes!)", "()[]")   // => True
// isBalanced("(Sensei [says) no!]", "()[]")    // => False

// // In this case a single quote (') both opens and closes a section
// isBalanced("Sensei says 'yes'!", "''")       // => True
// isBalanced("Sensei say's no!", "''")         // => False


// \\\\\\\\\\\\\\ TEST ///////////////////////

// Test.assertEquals(isBalanced("(Sensei says yes!)", "()"), true);
// Test.assertEquals(isBalanced("(Sensei says no!", "()"), false);

// Test.assertEquals(isBalanced("(Sensei [says] yes!)", "()[]"), true);
// Test.assertEquals(isBalanced("(Sensei [says) no!]", "()[]"), false);

// Test.assertEquals(isBalanced("Sensei says -yes-!", "--"), true);
// Test.assertEquals(isBalanced("Sensei -says no!", "--"), false);

//THIS PASSED ALL TEST BUT ONE

function isBalanced(s, caps) {
  let jury = false;

  strToSplit = caps.split();
  console.log(strToSplit);


  function compare(string, strToSplit) {
    console.log(string[0], string[string.length - 1]);

    for (let pair = 0; pair < strToSplit.length; pair++) {
      if (string[0] == strToSplit[pair][0] && string[string.length - 1] == strToSplit[pair][1]) {

        jury = true;
        return jury;
      }
    }
  }

  compare(s, strToSplit);
  return jury;
}


//THIS PASSED ALL TEST BUT TWO

isBalanced = (s,caps) =>{
  let capSplit = caps.split('');
  let capOpener = capSplit[0];
  let capCloser = capSplit[1];
  let secondOpen = capSplit[2];
  let secondCloser = capSplit[3];
  let firstArg = true;
  let secondArg = true;
  let finalProduct = false;
 console.log(caps.length);
 if(capOpener === capCloser && s.includes(capOpener)){
     finalProduct = true;
 }
 if(caps.length == 2){
   if(s.includes(capOpener) && s.includes(capCloser)){
     firstArg=true;
   }else{
     firstArg=false;
   }
 }

 if(caps.length >= 3){
   if(s.includes(secondOpen) && s.includes(secondCloser)){
     secondArg=true;
   }else{
     secondArg=false;
   }
 }

 if(caps.length == 2 && firstArg){
   console.log('wut--', caps.length);
   console.log('wutt---',firstArg);
   finalProduct=true;
   
 }

 if(caps.length >= 3 && secondArg){
   if(firstArg && secondArg){
    finalProduct = true; 
   }else{
     finalProduct=false;
   }
 }

 console.log('FIRST ARGUMENT ------', firstArg);
 console.log('SECOND ARGUMENT -----', secondArg);
  console.log(capSplit);
  console.log(capOpener);
  console.log(capCloser);
  console.log(secondOpen);
  console.log(secondCloser);

 console.log(finalProduct);
}