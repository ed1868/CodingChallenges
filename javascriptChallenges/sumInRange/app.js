sumAll = (arr) => {
  let starter = arr[0];
  let ender = arr[1];
  let count = 0;

if(starter <= ender){
  for(let i = starter; i <= ender; i++){
    count += i;  
  }
}else {
 for(let i = ender; i <= starter; i++){
   count += i;
 }
}
  return count;
}