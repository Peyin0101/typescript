"use strict";
const storageKey = Symbol("storageKey");
class SafeStorage {
    constructor(initialData) {
        this.setData(initialData);
    }
    validateData(data) {
        if (data === null || data === undefined) {
            console.log("Data kan niet null of undefined zijn.");
            return false;
        }
        return true;
    }
    setData(data) {
        if (this.validateData(data)) {
            this[storageKey] = data;
        }
    }
    getData() {
        return this[storageKey];
    }
    deleteData() {
        delete this[storageKey];
    }
    exists() {
        return this[storageKey] !== undefined;
    }
}
const hiddenData = new SafeStorage("Geheime Info");
console.log(hiddenData.getData()); // "Geheime Info"
hiddenData.setData(undefined); // Console logt: "Data kan niet null of undefined zijn."
console.log(hiddenData.getData()); // "Geheime Info" (ongewijzigd vanwege de validatie)
hiddenData.deleteData();
console.log(hiddenData.exists()); // false
const invalidStorage = new SafeStorage(undefined); // Console logt: "Data kan niet null of undefined zijn."
console.log(invalidStorage.getData()); // undefined (geen initiële waarde ingesteld vanwege de validatie)
