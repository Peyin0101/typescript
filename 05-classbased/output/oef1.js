"use strict";
class Auto {
    constructor(merk, model, bouwjaar) {
        this.merk = merk;
        this.model = model;
        this.bouwjaar = bouwjaar;
    }
    get beschrijving() {
        return `${this.merk} ${this.model}`;
    }
    set jaar(value) {
        if (value > 2000) {
            this.bouwjaar = value;
        }
        else {
            console.log("Voer een geldig bouwjaar in.");
        }
    }
    toonDetails() {
        console.log(`${this.merk} ${this.model} (Bouwjaar: ${this.bouwjaar}).`);
    }
}
const mijnAuto = new Auto("Toyota", "Corolla", 2020);
const jouwAuto = new Auto("Honda", "Civic", 2019);
console.log(mijnAuto.merk);
mijnAuto.bouwjaar = 2021;
console.log(mijnAuto.bouwjaar);
mijnAuto.toonDetails();
// console.log(
//   `Mijn ${mijnAuto.merk} ${mijnAuto.model} is gebouwd in ${mijnAuto.bouwjaar}.`
// );
// console.log(
//   `Jouw ${jouwAuto.merk} ${jouwAuto.model} is gebouwd in ${jouwAuto.bouwjaar}.`
// );
