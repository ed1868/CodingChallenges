let encrypt = (str, n) => {
  let result = str.replace(/./g, a  => {  
      let temp = a.charCodeAt(0) + n;
      return temp>255 ? String.fromCharCode(temp%256) : String.fromCharCode(temp); 
  });
  return result;
}