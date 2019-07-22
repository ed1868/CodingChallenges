plusMinus = (arr) => {
  let arrLength = arr.length;


  let positiveCounter = 0;
  let negativeCounter = 0;
  let zeroCounter = 0;

arr.map( number => {

if(number == 0){
 zeroCounter += 1;
}
if(number < 0){

 negativeCounter += 1;
}

if(number > 0){
 positiveCounter += 1;
}

})

let positiveResult = positiveCounter /= arrLength;

let negativeResult = negativeCounter /= arrLength;

let zeroResult = zeroCounter /= arrLength;

console.log('POSITIVE COUNTER---', positiveResult);

console.log('NEGATIVE COUNTER ---', negativeResult);

console.log('ZERO COUNTER ---', zeroResult);

}

plusMinus([-4, 3, -9, 0, 4, 1 ]);


// sample output

// 0.500000
// 0.333333
// 0.166667