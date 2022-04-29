const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
  ]


superbowlWin = (array) => {
    return array.find((recordForYear) => recordForYear.result === "W");
}    

console.log(superbowlWin(record));

