findShort = s => {
  let strSplit = s.split(' ');
 
  let counter = strSplit[0].length;
 
 for(let i = 0; i < strSplit.length; i++){
   let currentWord = strSplit[i];
 
   if(currentWord.length <= counter){
     counter = currentWord.length;
   }
 
 
 }
 
 return counter;
 
  
 }
 findShort("bitcoin take over the world maybe who knows perhaps")