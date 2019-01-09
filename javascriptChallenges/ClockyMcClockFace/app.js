// Due to lack of maintenance the minute-hand has fallen off Town Hall clock face.

// And because the local council has lost most of our tax money to a Nigerian email scam there are no funds to fix the clock properly.

// Instead, they are asking for volunteer programmers to write some code that tell the time by only looking at the remaining hour-hand!

// What a bunch of cheapskates!

// Can you do it?

// Kata
// Given the angle (in degrees) of the hour-hand, return the time in HH:MM format. Round down to the nearest minute.

// Examples
// 12:00 = 0 degrees
// 03:00 = 90 degrees
// 06:00 = 180 degrees
// 09:00 = 270 degrees
// 12:00 = 360 degrees

const whatTimeIsIt = function (angle) {
  const tmin = Math.floor(angle / 0.5);
  let hour = Math.floor(tmin / 60);
  let min = Math.floor(tmin % 60);

  if (hour.toString().length < 2) {
    hour = `0${hour.toString()}`;
  }

  if (min.toString().length < 2) {
    min = `0${min.toString()}`;
  }

  if (angle === 0 || angle < 30) {
    return `12:${min}`;
  }
  return `${hour}:${min}`;
};
