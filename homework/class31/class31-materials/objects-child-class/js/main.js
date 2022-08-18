//Create an a class and extend it - Can be anything you would like it to be!

class Animal {
	constructor(name, sound) {
		this.name = name;
		this.sound = sound;
	}
	speak(sound) {
		console.log(`${this.name} says ${this.sound}`);
	}
}

class WildAnimal extends Animal {
	constructor(name, sound, breed) {
		super(name, sound);
		this.breed = breed;
	}
}

class DomAnimal extends Animal {
	constructor(name, sound, breed, treat) {
		super(name, sound);
		this.breed = breed;
		// this.treat = treat;
	}
	takeTreat(treat) {
		this.treat = treat;
		console.log(`${this.name} is asking for a ${this.treat} treat for ${this.breed}`);
	}
}
let pig = new WildAnimal('pig', 'Oink', 'pink');

let dog = new DomAnimal('doggo', 'bark', 'bull');
