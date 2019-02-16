 encodeResistorColors = (ohmsString) => {

  const colors = { '0': 'black', '1': 'brown', '2': 'red', '3': 'orange', '4': 'yellow', '5': 'green', '6': 'blue', '7': 'violet', '8': 'gray', '9': 'white' };
 
  let input = ohmsString.split(' ')[0];
    
  let symbol = input[input.length - 1];
  let value = parseFloat(input) * (symbol === 'M' ? 1000000 : symbol === 'k' ? 1000 : 1);
    
  let valueAsString = value + '';
  
  let band1 = colors[valueAsString[0]];
  let band2 = colors[valueAsString[1]];
  let band3 = colors[Math.log10(value / parseInt(valueAsString[0] + valueAsString[1]))];
  
  return `${band1} ${band2} ${band3} gold`;

}