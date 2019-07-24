 reverse = (str) => {
  //WRITE SOME MAGIC
  let strSplit = str.split(' ');
  console.log('str split ----', strSplit);

  let result = [];

for(let i =0; i < strSplit.length; i++){
  if(strSplit.indexOf(strSplit[i]) % 2 == 0){
         result.push(strSplit[i]);
  }else{
      result.push(strSplit[i].split("").reverse().join(''));
  }
}
return result.join(' ');

}



reverse("Reverse this string, please!");



// "Reverse siht string, !esaelp");