let numOne = 4;
let numTwo = 6;

sergioCodes = (numOne,numTwo) => {

numOne = numOne + numTwo;

numTwo = numTwo - numOne ;

numOne = numOne - numTwo;

}

sergioCodes(numOne,numTwo);


console.log(`${numOne} and ${numTwo}`);