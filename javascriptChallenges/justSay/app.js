lookSay = (number) => {
  let product = "";
  let str = number.toString();
  let counter = 1;
  for (let i = 1; i < str.length; i++){

      if (str[i] != str[i-1]) {
          console.log('PRODUCT BEFORE---', product);
          product += counter.toString() + str[i-1];
          console.log('PRODUCT AFTER---', product);
          counter = 0;
      }
      counter += 1;
  }

    product += counter.toString() + str[str.length-1];
    return Number(product);
}

