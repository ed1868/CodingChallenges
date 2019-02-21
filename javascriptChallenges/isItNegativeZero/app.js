 isNegativeZero = (n) => {


  if (n > 0 || n < 0) {
  return false;
  }
  
  if((Infinity/n) === -Infinity) {
  return true;
  }
  
  return false;
    
  }