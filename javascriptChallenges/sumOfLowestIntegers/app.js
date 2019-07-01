sumTwoSmallestNumbers = (numbers) => {  
  //Code here
  let arr = numbers;
  arr.map( number => {
    if(number < 0){
      console.log('ENTRO EN NEGATIVE');
      let index = arr.indexOf(number);
      arr.splice(index,1);
    }
  })

  let sorted = arr.sort(function(a, b){return a-b});
  let lowestNum = sorted[0];
  let secondLowNum = sorted[1];

  return lowestNum += secondLowNum;


}