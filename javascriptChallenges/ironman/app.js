iTri = (s) => {
  //its gonna be a long day!
  let finalMilage = 140.6;
  let remainder = finalMilage - s;
  let result = {};
  
  if(s == 0){
    let starterMessage = 'Starting Line... Good Luck!';
    return starterMessage;
  }
  
  if( s >= 140.6){
    let finishMessage ="You're done! Stop running!";
  
    return finishMessage;
  }
  
  if(s < 2.4){
    result = {
     'Swim': `${remainder.toFixed(2)} to go!`
   }
  
  }
  
  if(s >= 2.4 && s <= 114.4){
  
    result = {
      'Bike' :`${remainder.toFixed(2)} to go!`
    }
    
  }
  
  
  if(s > 114.4){
    if(s < 130.6){
        result = {
      'Run' :`${remainder.toFixed(2)} to go!`
    }
    }else if(s >= 130.6 && s < 140.6){
            result = {
      'Run' :`Nearly there!`
    }
    }
  }
  
  return result;
  
  }