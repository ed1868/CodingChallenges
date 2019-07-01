
sortArray = (array) => {
  let even = array.filter(x => (x + 1) % 2).sort((a, b) => b - a);


  let  odd = array.filter(x => x % 2).sort((a, b) => a - b);

  console.log('THE EVEN---', even);
  console.log('THE ODD---', odd);


return array.map(x => (x % 2) ? odd.shift() : even.shift());
}

sortArray([5, 3, 2, 8, 1, 4, 11]);