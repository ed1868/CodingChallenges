 area = (d,l) => {
  if(d < l) return 'Not a rectangle'
  return Number((l * Math.sqrt(d*d-l*l)).toFixed(2));
  
  }
  