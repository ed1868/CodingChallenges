lookSay = (n) => {
  let str = n.toString();
  console.log('FIRST STR---', str);
  let result = "";
  let counter = 1;
  for (let i = 1; i < str.length; i++){
    console.log(str[i]);
      if (str[i] != str[i-1]) {
        console.log(str[i]-1);
        console.log('nah');
        console.log('RESULT BEFORE---', result);
          result += counter.toString() + str[i-1];
          console.log('RESULT AFTER---',result);
          counter = 0;
      }
      counter += 1;
  }
  console.log('STR LENGTH----', str.length);
  result += counter.toString() + str[str.length-1];
  return Number(result);
}

// lookSay(0);
lookSay(12);