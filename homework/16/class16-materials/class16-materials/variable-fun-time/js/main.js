//--- Easy
//create a variable and assign it a number
let firstVar = 50;
//minus 10 from that number
firstVar -= 10;
//print that number to the console
console.log(firstVar);
//--- Medium
//create a variable that holds a value from the input

let inputVar = document.getElementById("danceDanceRevolution").value;

//add 25 to that number
inputVar += 25;
//alert that number
// alert(inputVar);
//--- Hard
//create a variable that holds the h1
const clicker = document.querySelector("h1");
//add an event listener to that element that console logs the sum of the two previous variables
clicker.addEventListener("click", () => {
  let inputV = document.getElementById("danceDanceRevolution").value;

  if (inputV === "") {
    alert("please enter a value");
  } else if (isNaN(parseInt(inputV))) {
    alert("please only enter a number");
  } else {
    alert((inputV = parseInt(inputV) + 200));
  }
});
