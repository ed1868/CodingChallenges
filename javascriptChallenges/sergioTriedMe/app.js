plusMinus = (arr) => {

  // YOU NEED TO BY THE RESULTS BY NUMBER OF TOTAL ITEMS IN THE ARRAY SO FIRST LET'S GET THE ARRAY LENGTH 
  let arrLength = arr.length;

// YOU NEED TO HAVE VARIABLES THAT KEEPS COUT OF NEGATIVE, ZERO, POSITIVES

  let positiveCounter = 0;
  let negativeCounter = 0;
  let zeroCounter = 0;

  // YOU NEED TO LOOP THROUGH THE ARRAY TO FIGURE OUT WHAT EACH NUMBER IS 
  // I USED A ARRAY.MAP LOOP BECAUSE IT DOESNT MESS WITH THE ORIGINAL ARRAY , IT RETURNS A CLONE OF IT BUT YOU COULD USE OTHER LOOPS
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

});

let positiveResult = positiveCounter /= arrLength;

let negativeResult = negativeCounter /= arrLength;

let zeroResult = zeroCounter /= arrLength;

console.log(positiveResult.toFixed(6));

console.log(negativeResult.toFixed(6));

console.log(zeroResult.toFixed(6));

}

plusMinus([-4, 3, -9, 0, 4, 1 ]);


// sample output

// 0.500000
// 0.333333
// 0.166667