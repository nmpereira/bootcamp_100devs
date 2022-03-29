// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console

const holiday = "CHIRSTMAS";

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)

// console.log(holiday.slice(0, 3));

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

const rand = (random) => (random > 0.5 ? `heads` : `tails`);
// console.log(rand());
//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.

const flipper = (x) => {
  for (let i = 0; i < x; i++) {
    let random = Math.random().toFixed(2);
    console.log(`${rand(random)}\n`);
  }
};

flipper(1000);
