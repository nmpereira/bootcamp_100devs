//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function StreetFigher(name, power, melee, mana) {
  this.name = name;
  this.power = power;
  this.melee = melee;
  this.mana = mana;
  this.ult = function () {
    alert(`${this.name} using ult! You dead boy!`);
  };
  this.recharge = function () {
    alert(`${this.name} recharging ${this.mana} mana please wait!`);
  };
}

let mario = new StreetFigher("mario", "69", true, 100);
let luigi = new StreetFigher("luigi", "10", false, 50);
let konga = new StreetFigher("konga", "500", true, 200);
