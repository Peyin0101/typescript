"use strict";
class Student {
    constructor(naam, studentNummer) {
        this._cijfers = [];
        this._naam = naam;
        this._studentNummer = studentNummer;
    }
    get getNaam() {
        return this._naam;
    }
    get getGemiddelde() {
        if (this._cijfers.length === 0)
            return 0;
        let som = this._cijfers.reduce((a, b) => a + b, 0);
        return Number((som / this._cijfers.length).toFixed(2));
    }
    set setNaam(value) {
        if (value.trim() !== "") {
            this._naam = value;
        }
        else {
            console.log("Voer een geldige naam in.");
        }
    }
    voegCijferToe(cijfer) {
        this._cijfers.push(cijfer);
    }
}
const student1 = new Student("John Doe", "s123456");
const student2 = new Student("Jane Doe", "s654321");
const student3 = new Student("John Smith", "s789321");
student1.voegCijferToe(8.5);
student2.voegCijferToe(6.5);
student3.voegCijferToe(7);
console.log(`Gemiddelde van ${student1.getNaam}: ${student1.getGemiddelde}`);
console.log(`Gemiddelde van ${student2.getNaam}: ${student2.getGemiddelde}`);
console.log(`Gemiddelde van ${student3.getNaam}: ${student3.getGemiddelde}`);
student1.setNaam = "Henry Cavill";
console.log(`De nieuwe naam van student 1 is: ${student1.getNaam}`);
