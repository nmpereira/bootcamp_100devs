console.clear();
// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let drink = "oreoShake";

let odds1 = 33;
let odds2 = 66;
let odds_1 = odds1 / 100;
let odds_2 = odds2 / 100;

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

let sentence = "is this an orange";

let checker = (test) => {
  let arr = sentence.split(" ");
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] === test) {
      console.log("True");
    } else {
      console.log("False");
    }
  }
};
// checker("orange");

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

let picker = () => {
  let rand = Math.random();
  if (rand <= odds_1) {
    return "rock";
  } else if (rand >= odds_2) {
    return "paper";
  } else {
    return "scissors";
  }
};
// console.log(picker());
// console.log(picker());
// console.log(picker());
// console.log(picker());
// console.log(picker());
// console.log(picker());

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
let winCounter_user = 0;
let winCounter_comp = 0;
let winCounter_tie = 0;
let logic = (choice, compChoice) => {
  if (
    (compChoice === "rock" && choice == "rock") ||
    (compChoice === "paper" && choice == "paper") ||
    (compChoice === "scissors" && choice == "scissors")
  ) {
    winCounter_tie++;
    return "##########################################Tie";
  } else if (
    (compChoice === "rock" && choice == "scissors") ||
    (compChoice === "paper" && choice == "rock") ||
    (compChoice === "scissors" && choice == "paper")
  ) {
    winCounter_comp++;

    return "##########################################You Lose";
  } else if (
    (choice === "rock" && compChoice == "scissors") ||
    (choice === "paper" && compChoice == "rock") ||
    (choice === "scissors" && compChoice == "paper")
  ) {
    winCounter_user++;
    return "##########################################You Win";
  }
};

let getChoice = (x) => {
  let choice = x || prompt("Pick rock, paper, or scissors");

  let compChoice = picker();
  //   console.log("Bot:", compChoice, "|| You:", choice);

  logic(choice, compChoice);
};
// getChoice();
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
};
let num = getRandomArbitrary(1, 1000000);
let arrayy = [];
for (let i = 0; i < num; i++) {
  let rand = Math.random();
  if (rand <= odds_1) {
    arrayy.push("rock");
  } else if (rand >= odds_2) {
    arrayy.push("paper");
  } else {
    arrayy.push("scissors");
  }
}
let allChoices = (num) => {
  num.forEach((x) => getChoice(x));
  console.log(arrayy);
};

allChoices(arrayy);
let percentWin = (x) => {
  let win = (x / num) * 100;
  return Math.round(win * 100) / 100;
};
console.log(
  "Computer won",
  winCounter_comp,
  "times or",
  percentWin(winCounter_comp),
  "%"
);
console.log(
  "You won",
  winCounter_user,
  "times or",
  percentWin(winCounter_user),
  "%"
);
console.log(
  "You tied",
  winCounter_tie,
  "times or",
  percentWin(winCounter_tie),
  "%"
);
console.log(
  "You played",
  winCounter_tie + winCounter_user + winCounter_comp,
  "times"
);
