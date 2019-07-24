function createPhoneNumber(numbers){
  let join = numbers.join('');
  let areaCode = `(${join.substring(0,3)})`
  let body = `${join.substring(3,6)}`;
  let ending =`${join.substring(6,10)}`;

return  `${areaCode} ${body}-${ending}`;
}


createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"