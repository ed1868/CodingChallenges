//CREATED BY AI NOMADS
//PRRODUCED BY EDDIE RUIZ

//OBJECTIVE OF THIS IS TO HAVE EVERYONE ON THIS PLANE RANDOMIZE SEATING CHART

let data = {

}


let seatingChart = []


randomizerr = (arr) => {

  let arrToLoop = arr;
  let newArr;

  arrToLoop.map(person => {
    console.log(`------CURRENT USER----- : ${person}`);

    let reversedUserr = person.reverse()

    newArr.push(reversedUserr);

  })
  

  return newArr
}

