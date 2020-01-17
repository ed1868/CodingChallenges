function calculate(str) {
  //your code here...
  let strSplit = str.split('');
  console.log(`STR SPLIT INTO AN ARRAY ${strSplit}`);
  let counter = 0;
  let equation = " ";
  
  for(i=0;i < strSplit.length; i++){
    console.log(`CURRENT ITERATION ---- ${strSplit[i]}`);
    let number = Number(strSplit[i])
    
  }
  
  
  let response = Number(str[1]);
  return response;
  
  }
  
  calculate("1plus2plus3plus4");
  // , '10'