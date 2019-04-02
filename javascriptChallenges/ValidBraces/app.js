validBraces = braces => {
  var arr = [];

  for (var i = 0; i < braces.length; i++) {
    if (braces[i] === "{") {
      arr.unshift("}");
    } else if (braces[i] === "[") {
      arr.unshift("]");
    } else if (braces[i] === "(") {
      arr.unshift(")");
    } else if (braces[i] !== arr[0]) {
      return false;
    } else {
      arr.shift();
    }
  }
  return arr.length === 0;
};
