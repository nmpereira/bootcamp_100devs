//---Easy
//create a function that subtracts two numbers and alerts the difference
function subber(a, b) {
  return a - b;
}
console.log(subber(100, 25));
//create a function that divides three numbers and console logs the quotient

function divide(a, b, c) {
  return a / b / c;
}
console.log(divide(100, 10, 2));
//create a function that multiplys three numbers and returns the product
function multi(a, b, c) {
  return a * b * c;
}
console.log(multi(5, 10, 2));

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function third(a, b, c) {
  return (a + b) % ((a + b) / c);
}
console.log(third(5, 5, 100));

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function four(a, b, c, d) {
  if (a * b > 100) {
    return c + d;
  } else if (a * b < 100) {
    return c - d;
  } else {
    return (a * b * c) % ((a * b * c) / d);
  }
}

console.log(four(10, 10, 100, 5));
