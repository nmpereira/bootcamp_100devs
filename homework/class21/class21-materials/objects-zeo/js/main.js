//Create a stopwatch object that has four properties and three methods

let stopWatch = {};

stopWatch.currentTime = 9.22;
stopWatch.color = "black";
stopWatch.weight = 100;
stopWatch.size = 10;

stopWatch.logTime = (time) => console.log(`Current time is ${time}`);
stopWatch.addMin = (time) => time + 1;
stopWatch.minusMin = (time) => time - 1;

stopWatch.logTime(stopWatch.currentTime);

stopWatch.currentTime = stopWatch.minusMin(stopWatch.currentTime);

stopWatch.logTime(stopWatch.currentTime);
stopWatch.currentTime = stopWatch.addMin(stopWatch.currentTime);
stopWatch.logTime(stopWatch.currentTime);

console.log(stopWatch);
console.log([]);
