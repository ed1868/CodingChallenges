encryptThis = (str) => {
  //   Your message is a string containing space separated words.
  // You need to encrypt each word in the message using the following rules:
  // The first letter needs to be converted to its ASCII code.
  // The second letter needs to be switched with the last letter
  // Keepin' it simple: There are no special characters in input.
  
  let arrayOfStrs = str.split(" ");
  console.log('STR TURNED INTO AN ARRAY', arrayOfStrs );
  let result = []
  c
  arrayOfStrs.map(word => {
  let firstLetter = word.charCodeAt(0)
  let splitWord = word.split('');
  
  splitWord.splice(0, 1 , firstLetter);
  
  
  result.push(splitWord.join(" "))
  })
  
  console.log(result)
  }
  
  
  encryptThis("Hello") 
  // === "72olle"
  encryptThis("good") 
  // === "103doo"
  encryptThis("hello world") 
  // === "104olle 119drlo"