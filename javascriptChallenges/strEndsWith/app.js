solution = (str, ending) => {


  
if(str.substr(str.length - ending.length) == ending){
  return true;
}
return false; 

}


solution('abcde', 'cde')