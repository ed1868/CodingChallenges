// We all love fridays, and even better if it is the last day of the month!

// In this kata you should write a function that will receive 2 parameters. Both are years, and indicates a range.

// Your work is to return the number of times a month ends with a Friday.

// If there is only one year provided, return the number of times a month ends on Friday on that year. Range bounds are inclusive in every case!

// For example, between 1901 and 2000, a month ends on Friday 171 times.

function lastDayIsFriday(initialYear, endYear) {
  let counter = 0;

  endYear ? !endYear : endYear = initialYear;

  dayChecker = (day) => {
    if (day.getDay() === 5) {
      counter++;
    }
  };

  for (let year = initialYear; year <= endYear; year++) {
    for (let month = 1; month <= 12; month++) {
      const lastDay = new Date(year, month, 0);
      dayChecker(lastDay);
    }
  }

  return counter;
}

lastDayIsFriday(1901, 2000);
lastDayIsFriday(1901, 2017);
lastDayIsFriday(1991);
