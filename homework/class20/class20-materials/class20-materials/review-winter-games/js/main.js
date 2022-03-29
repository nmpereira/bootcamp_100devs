//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

let arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const spitout = (x) => {
  let result = [];

  x.forEach((e) => (e % 2 === 0 ? result.push(e) : false));

  return result;
};

console.log(spitout(arr));
