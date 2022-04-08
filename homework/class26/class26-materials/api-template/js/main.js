//Example fetch using pokemonapi.co
document.querySelector("input").addEventListener("keyup", getFetch);
document.querySelector("button").addEventListener("click", getFetch);
function getFetch() {
  const choice = document.querySelector("input").value;
  const url =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + choice;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      const length = data.drinks.length;
      const rand = Math.floor(Math.random() * (length - 0 + 1) + 0);
      document.querySelector("h2").innerText = data.drinks[rand].strDrink;
      document.querySelector("img").src = data.drinks[rand].strDrinkThumb;
      document.querySelector("h3").innerText =
        data.drinks[rand].strInstructions;
      console.log(data);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
