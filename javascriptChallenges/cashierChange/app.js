 withdraw = (amount) => {
  // coding and coding..
  let finalArr = [0,0,0];

  while (amount > 0) {
    
    if (amount >= 100) {
      finalArr[0]++;
      amount -= 100;
    }
    
    if (amount >= 20 && amount < 100) {
      finalArr[2]++;
      amount -= 20;
    }
    
    if (amount === 10 && finalArr[2] >= 2) {
      finalArr[2] -= 2;
      finalArr[1]++;
      amount -= 10;
    }
    if (amount === 10 && finalArr[2] < 2) { 
      finalArr[0]--;
      finalArr[1]++;
      finalArr[2] += 3;
      amount -= 10;
    }
  }
  console.log(finalArr);
  return finalArr

  
}