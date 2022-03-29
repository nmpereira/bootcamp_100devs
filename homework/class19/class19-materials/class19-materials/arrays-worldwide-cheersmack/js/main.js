//Create a function that takes in a number. The function should return an array that contains every number from 1 to that number as seperate elements
array = [];
const arrfunc = (x) => {
  for (let i = 1; i <= x; i++) {
    array.push(i);
  }
};

arrfunc(10);
console.log(array);
