// // Come up with with a parent class
// // Extend that parent class into two children
// // Use Encapsulation, Abstraction, Inheritance, and Polymorphism

class Contractor {
	constructor(name, role) {
		this._name = name;
		this._role = role;
		this._count = 1;
		this._counting;
	}
	get name() {
		return this._name;
	}
	get role() {
		return this._role;
	}
	sayHello() {
		return `Hi! My name is ${this._name}, I'm a ${this._role} dev`;
	}

	startCounting() {
		this._counting = setInterval(() => console.log(this._count++), 1000);
		return `${this._name} started counting because ${this.stack} was boring after doing it for ${this
			._yearsOfExperience} years`;
	}
	stopCounting() {
		console.log(`${this._name} stopped counting at ${this._count}`);
		clearInterval(this._counting);
	}
}

class FrontendDev extends Contractor {
	constructor(name, role, stack, yearsOfExperience) {
		super(name, role, stack);
		this._frontstack = stack;
		this._yearsOfExperience = yearsOfExperience;
	}

	get stack() {
		return this._frontstack;
	}
	get years() {
		return this._yearsOfExperience;
	}

	buildPage() {
		return `${this._name} checked in ${this._frontstack} code to frontend! They have been working for ${this
			._yearsOfExperience} years`;
	}
}

class BackendDev extends Contractor {
	constructor(name, role, stack, yearsOfExperience) {
		super(name, role);
		this._backstack = stack;
		this._yearsOfExperience = yearsOfExperience;
	}

	get stack() {
		return this._backstack;
	}
	get years() {
		return this._yearsOfExperience;
	}

	buildServer() {
		return `${this._name} checked in ${this._backstack} code to backend! They have been working for ${this
			._yearsOfExperience} years`;
	}
}

let bob = new Contractor('Bob', 'Front-end');
let simba = new FrontendDev('Simba', 'Front-end', 'React', 3);
let machi = new BackendDev('The Machine', 'Back-end', 'Node', 5);

// class Contractor{
//     constructor(name,role){
//         this._name = name
//         this._role = role
//     }
//     get name(){
//         return this._name
//     }
//     get role(){
//         return this._role
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
//     }
// }
// class Front extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// class Back extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// let bob = new Contractor('Bob','Front-end')
// let simba = new Front('Simba','Front-end','React')
// let machi = new Back('The Machine','Back-end','Node')

// let agency = [bob,simba,machi]

// for(person of agency){
//     person.sayHello()
// }
