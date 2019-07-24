function compareTriplets(a, b) {
  let playerOne = a;
  let playerOneScore = 0;
  
  let playerTwo = b;
  let playerTwoScore = 0;
  
  let result= [];
  
  if(playerOne[0] > playerTwo[0]){
    playerOneScore += 1;
  }
  
  if(playerTwo[0] > playerOne[0]){
    playerTwoScore += 1;
  }
  
  if(playerOne[1] > playerTwo[1]){
    playerOneScore += 1;
  }
  
  if(playerTwo[1] > playerOne[1]){
    playerTwoScore += 1;
  }
  
  if(playerOne[2] > playerTwo[2]){
    playerOneScore += 1;
  }
  
  if(playerTwo[2] > playerOne[2]){
    playerTwoScore += 1;
  }
  
  
  result.push(playerOneScore);
  result.push(playerTwoScore);
  
  return result;
  
  
  
  
  }
  
  compareTriplets([17 ,28, 30],
  [99 ,16 ,8])