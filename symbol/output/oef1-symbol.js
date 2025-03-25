"use strict";
const dataKey = Symbol("dataKey");
class HiddenData {
    constructor(data) {
        this[dataKey] = data;
    }
    getData() {
        return this[dataKey];
    }
    setData(newData) {
        this[dataKey] = newData;
    }
}
const hidden = new HiddenData("Initiële verborgen data");
console.log(hidden.getData()); // Moet "Initiële verborgen data" afdrukken
hidden.setData("Nieuwe verborgen data");
console.log(hidden.getData()); // Moet "Nieuwe verborgen data" afdrukken
