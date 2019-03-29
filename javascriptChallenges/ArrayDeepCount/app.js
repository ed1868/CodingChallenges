deepCount= (arr) =>{
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) temp += deepCount(arr[i]);
    temp++;
  }
  return temp;
}
