"use strict";
class Database {
    constructor() {
        this.data = [];
    }
    // Voeg de nodige statische en instantievariabelen toe
    // Implementeer de private constructor
    // Implementeer de statische getInstance methode
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
    addData(plusData) {
        this.data.push(plusData);
    }
    removeData(deleteData) {
        this.data = this.data.filter((data) => data !== deleteData);
    }
    fetchData() {
        return this.data;
    }
}
// Testen
const db1 = Database.getInstance();
const db2 = Database.getInstance();
// Hier controleren we of beide "instanties" dezelfde zijn
console.log(db1 === db2); // Outputs: true
db1.addData("Data 1");
db1.addData("Data 2");
console.log(db2.fetchData()); // Outputs: ["Data 1", "Data 2"]
db2.removeData("Data 1");
console.log(db1.fetchData()); // Outputs: ["Data 2"]
