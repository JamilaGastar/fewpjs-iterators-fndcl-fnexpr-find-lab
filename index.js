const record = [
    {year: "1950", result: "L"},
    {year: "1969", result: "W"},
    {year: "1980", result: "L"}
  ]

let winningYears = record.find(recordForYear => recordForYear.result === "W")
console.log(winningYears);

superbowlWin = (array) => array.year;
console.log(superbowlWin(winningYears));
      






