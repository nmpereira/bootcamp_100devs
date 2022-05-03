//Example fetch using pokemonapi.co

const getFetch = () => {
  // function getFetch() {
  const choice = document.querySelector("input").value;
  const url =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + choice;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      const length = data.drinks.length;
      const min = 0;
      const rand = Math.floor(Math.random() * (length - min + 1) + min);

      document.querySelector("h2").innerText = data.drinks[rand].strDrink;
      document.querySelector("img").src = data.drinks[rand].strDrinkThumb;
      document.querySelector("h3").innerText =
        data.drinks[rand].strInstructions;

      const res = Object.keys(data.drinks[rand])
        .filter((x) => x.startsWith("strIngredient"))
        .map((e) => data.drinks[rand][e])
        .filter((x) => x);

      // console.log("data.drinks[rand]", res);
      document.querySelector("p").innerText = res;

      console.log("data", data);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
};

document.querySelector("input").addEventListener("keyup", getFetch);
document.querySelector("button").addEventListener("click", getFetch);
