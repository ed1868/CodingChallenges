going = (n) => {
  let r =1;
  let a = 1;
  
  for(let i=0; i < n-1; i++) {
    a = a/(n-i);
    r = r+a;
  }
  return Math.floor(r*1000000)/1000000;
}