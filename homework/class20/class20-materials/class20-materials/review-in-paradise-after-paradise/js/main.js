// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

arr = [1, 2, 3, 10];

const array = (a) => {
  return a[0] < a[a.length - 1] ? "hi" : "bye";
};

console.log(array(arr));
