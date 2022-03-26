//Create a function that has a loop that prints '21' 21 times to the console and then call that function

function loopy(x) {
  for (let i = 0; i <= x; i++) {
    document.querySelector("#savageSays").innerHTML += i;
  }
}
loopy(21);

//Bonus can you make it print '21' 21 times to the dom?
