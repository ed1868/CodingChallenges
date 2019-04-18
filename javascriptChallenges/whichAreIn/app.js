let inArray = (array1, array2) => {
  let arr = [];
  for(let i = 0; i < array1.length; i++){
      let substr = array1[i];
      for(let j = 0; j < array2.length; j++){
          if(array2[j].indexOf(substr) !== -1){
              arr.push(array1[i]);
              break;
          }
      }
  }
  return arr.sort();
}