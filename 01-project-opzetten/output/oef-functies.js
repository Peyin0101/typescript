"use strict";
const calculate = (num1, num2, operator) => {
    if (operator === "subtract") {
        return num1 - num2;
    }
    else
        return num1 + num2;
};
console.log(calculate(5, 3));
console.log(calculate(5, 3, "subtract"));
const introduce = (naam, leeftijd = 30) => `Hallo, mijn naam is ${naam} en ik ben ${leeftijd} jaar oud.`;
console.log(introduce("Randi"));
console.log(introduce("Randi", 44));
const user = {
    name: "Randi",
    age: 45,
    describe() {
        return `Hallo, mijn naam is ${this.name} en ik ben ${this.age} jaar oud.`;
    },
};
console.log(user.describe());
const person = {
    name: "Alice",
    startTimer: function () {
        setInterval(() => {
            console.log(`Hallo, mijn naam is ${this.name}`);
        }, 1000);
    },
};
person.startTimer();
//# sourceMappingURL=oef-functies.js.map