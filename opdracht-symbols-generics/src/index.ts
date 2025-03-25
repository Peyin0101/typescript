const storageKey = Symbol("storageKey");

class SafeStorage<T> {
  private [storageKey]?: T;

  constructor(initialData: T) {
    this.setData(initialData);
  }

  private validateData(data: T | undefined): boolean {
    if (data === null || data === undefined) {
      console.log("Data kan niet null of undefined zijn.");
      return false;
    }
    return true;
  }

  setData(data: T | undefined): void {
    if (this.validateData(data)) {
      this[storageKey] = data;
    }
  }

  getData(): T | undefined {
    return this[storageKey];
  }

  deleteData(): void {
    delete this[storageKey];
  }

  exists(): boolean {
    return this[storageKey] !== undefined;
  }
}

const hiddenData = new SafeStorage<string>("Geheime Info");
console.log(hiddenData.getData()); // "Geheime Info"
hiddenData.setData(undefined); // Console logt: "Data kan niet null of undefined zijn."
console.log(hiddenData.getData()); // "Geheime Info" (ongewijzigd vanwege de validatie)
hiddenData.deleteData();
console.log(hiddenData.exists()); // false
const invalidStorage = new SafeStorage<string | undefined>(undefined); // Console logt: "Data kan niet null of undefined zijn."
console.log(invalidStorage.getData()); // undefined (geen initiële waarde ingesteld vanwege de validatie)
