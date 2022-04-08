// *Variables*
// Declare a variable and assign it to a sentance that is a positive affirmation. Print the affirmation to the console multiple times using a method

//Declare a variable, assign it an array of letters, combine the letters into one word, and alert it

// *Functions*
// Create a function that returns rock, paper, lizard, spock or scissors as randomly as possible

// *Conditionals*
//Create a function that takes in a choice (rock, paper, scissors, lizard, or spock) and determines if they won a game of rock paper scissors against a bot using the above function

const array = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10, 9, 10, 10, 10, 11, 12];
console.log("array", array);
const set = new Set(array);
const obj = new Object(array);
console.log("set", set);

const newArray = [...set];
console.log("obj", obj);

const newArrayfromObj = [...obj];
console.log("newArray", newArray);
console.log("newArrayfromObj", newArrayfromObj);
