//Create a constructor with 4 properties and 3 methods

function Pizza(size, toppings, slices, crust) {
  (this.size = size),
    (this.toppings = toppings),
    (this.slices = slices),
    (this.crust = crust);
  this.bake = () =>
    console.log(
      `Baking your ${this.size} pizza with ${this.toppings.length} toppings`
    );
}

const Canadian = new Pizza("large", ["pepperoni", "pineaaple"], 8, "thick");
