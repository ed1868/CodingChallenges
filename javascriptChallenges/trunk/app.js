solution = (string, limit) => {
  if (string.length <= limit) {
    return string;
  }
  let strSplit = string.split("");

  console.log("STRING SPLIT : ", strSplit);

  let sliceStr = strSplit.splice(0, limit);

  console.log("SLICED STR : ", sliceStr);

  let result = `${sliceStr.join("")}...`;

  console.log("RESULT : ", result);
};

// solution('Testing String',3) // should return 'Tes...'
// solution('Testing String',8) // should return 'Testing ...'
// solution('Test',8) // should return 'Test'
solution("Test", 4);
