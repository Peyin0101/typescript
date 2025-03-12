"use strict";
class Animal {
    // Constructor
    constructor(name) {
        this.name = name;
    }
    get animalName() {
        return `De naam is: ${this.name}`;
    }
    set animalNameInstellen(value) {
        if (value.length > 0) {
            this.name = value;
        }
        else {
            console.log("Voer een geldige naam in.");
        }
    }
    // Methode
    makeSound() {
        console.log(`${this.name} makes a sound`);
    }
}
const myAnimal = new Animal("Dog");
// console.log(myAnimal.name);
console.log(myAnimal.animalName);
myAnimal.makeSound();
myAnimal.name = "MyDog";
// console.log(myAnimal.name);
console.log(myAnimal.animalName);
myAnimal.animalNameInstellen = "Cat";
console.log(myAnimal.animalName);
class Dier {
    constructor(naam) {
        this.naam = naam;
    }
    maakGeluid() {
        return `${this.naam} maakt een geluid.`;
    }
}
class Hond extends Dier {
    maakGeluid() {
        return `${this.naam} blaft!`;
    }
}
const mijnHond = new Hond("Rex");
console.log(mijnHond.maakGeluid()); // Output: "Rex blaft!"
