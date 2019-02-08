challenge five = 

String.prototype.toCapCase =  () => {
 
  let lowerCaseSplit = this.toLowerCase().split(' ');
  let newStr = lowerCaseSplit.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return newStr;
  
};