//Create a button that adds 1 to a botScore stored in localStorage
let botScore = localStorage.getItem("botScoreCount");
document.querySelector("h2").innerHTML = botScore;
const botButton = () => {
  botScore++;
  localStorage.setItem("botScoreCount", botScore);
  console.log(botScore);
  document.querySelector("h2").innerHTML = botScore;
};
