//Create a pizza object that has four properties and three methods

const pizza = {
  size: "medium",
  toppings: ["pepperoni", "pineapple", "bacon"],
  slices: 8,
  crust: "thick",
};
pizza.extraCheese = true;
pizza.bake = () => {
  console.log(
    `Your ${pizza.size} pizza is being baked. Your toppings are ${pizza.toppings}`
  );
};

pizza.bake();

pizza.order = () =>
  console.log(`Your ${pizza.size} pizza has ${pizza.slices} slices`);

pizza.order();
