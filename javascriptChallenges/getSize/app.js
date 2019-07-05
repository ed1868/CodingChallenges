getSize = (width,height,depth) => {

  let w = width;
  let h = height;
  let l = depth;

  let results = [];

  let surfaceArea = 2 * (h * w) + 2 * (h * l) + 2 * (w * l);
  let volume = w * h * l;

  console.log( `THE WIDTH GIVEN IS : ${w}`);
  console.log( `THE HEIGHT GIVEN IS : ${h}`);
  console.log( `THE LENGTH GIVEN IS : ${l}`);
  console.log( `THE VOLUME IS : ${volume}`);
  console.log( `THE SURFACE AREA IS : ${surfaceArea}`);

  if( w == undefined || h == undefined || l == undefined){
    console.log('WRONG INPUT');
  }

  results.push(surfaceArea);
  results.push(volume);

  return results;




}