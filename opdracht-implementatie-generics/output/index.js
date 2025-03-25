"use strict";
class PriorityQueue {
    constructor() {
        this.elements = [];
    }
    enqueue(value, priority) {
        const element = { value, priority };
        let added = false;
        for (let i = 0; i < this.elements.length; i++) {
            if (priority < this.elements[i].priority) {
                this.elements.splice(i, 0, element);
                added = true;
                break;
            }
        }
        if (!added) {
            this.elements.push(element);
        }
    }
    displayElements() {
        this.elements.forEach((element, index) => {
            console.log(`${index + 1}: Value = ${element.value}, Priority = ${element.priority}`);
        });
    }
    dequeue() {
        var _a;
        return (_a = this.elements.shift()) === null || _a === void 0 ? void 0 : _a.value;
    }
    peek() {
        var _a;
        if (this.elements.length > 0) {
            return (_a = this.elements[0]) === null || _a === void 0 ? void 0 : _a.value;
        }
        return undefined;
    }
    isEmpty() {
        return this.elements.length === 0;
    }
}
const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("Gamen", 3);
priorityQueue.enqueue("TypeScript herhalen", 1);
priorityQueue.enqueue("JavaScript herhalen", 2);
priorityQueue.enqueue("TypeScript oefenen", 1);
console.log("\nHuidige staat van de prioriteitswachtrij:");
priorityQueue.displayElements();
console.log("\ndequeue");
console.log(priorityQueue.dequeue());
console.log("\npeek");
console.log(priorityQueue.peek());
console.log("\nisEmpty");
console.log(priorityQueue.isEmpty());
