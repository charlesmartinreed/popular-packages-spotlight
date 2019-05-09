const moment = require("moment");

let val;

val = moment().format("YYYY-MM-DD");
val = moment().format("MMMM Do YYYY, h:mm:ss a"); //ex; May 9th 2019, 4:51:00 PM
val = moment("2017-04-01").format("MMMM Do YYYY h:mm:ss a"); //April 1st 2017...

// days of the week
val = moment().format("dddd"); //ex: Wednesday

// relative time
val = moment("20111031", "YYYYMMDD").fromNow(); //ex: 8 years ago

// how long ago did the day start
val = moment()
  .startOf("day")
  .fromNow();

val = moment()
  .startOf("year")
  .fromNow();

val = moment()
  .endOf("year")
  .fromNow();

// find distance between two points of time
val = moment(`2017-03-05`)
  .subtract(10, "weeks")
  .calendar();

val = moment(`2017-03-05`)
  .add(10, "weeks")
  .calendar();

console.log(val);
