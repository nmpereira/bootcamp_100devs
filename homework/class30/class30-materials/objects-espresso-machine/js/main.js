//Create an espresso machine constructor that makes machines with 4 properties and 3 methods


class Espresso{
    constructor(flavor,quantity,strength,grind){

        this.flavor=flavor;
        this.quantity=quantity;
        this.strength=strength;
        this.grind=grind;

    }

    brew(){
        console.log(`Brewing your ${this.strength} coffee`)
    }
    showOrder(){
        console.log(`Your ${this.quantity} ${this.grind} ${this.flavor} is ready.`)
    }
}


const lightCafe=new Espresso('choco','large','lite','fine')

