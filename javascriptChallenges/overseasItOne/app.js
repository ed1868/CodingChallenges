
timeTravel = (time) => {


  let timeSplit = time.split(':');
 let hour = timeSplit[0];
 let nightDay = time.substr(time.length - 2);

 if (hour.length == 1) {
     let hourSplit = hour.split('');
     let zero = "0";
     hourSplit.unshift(zero);
     let joined = hourSplit.join('');
     hour = joined.toString();
 }

 let min = timeSplit[1];
 let sec = time.substr(time.length - 4, 2);

 if (nightDay == "AM" && hour <= 12) {
   if(hour == 12){
       hour = '00';
   }
     return `${hour}:${min}:${sec}`;
 }

 if (nightDay == "PM" && hour == 12) {
     return `${hour}:${min}:${sec}`;
 }


 if (nightDay == "PM" && Number(hour) < 12) {
     let newHour = Number(hour) + 12;
     let hourToS = newHour.toString();

     return `${hourToS}:${min}:${sec}`;

 }




}

timeTravel('12:45:54AM');