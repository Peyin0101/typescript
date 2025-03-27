"use strict";
function getFirstItem(items) {
    return items[0];
}
let numbers = [1, 2, 3];
console.log(getFirstItem(numbers)); // Outputs: 1
let strings = ["apple", "banana", "cherry"];
console.log(getFirstItem(strings)); // Outputs: apple
function reverseArray(array) {
    return array.reverse();
}
// Gebruik van de generieke reverseArray-functie
const numbersArray = [1, 2, 3, 4, 5];
const reversedNumbers = reverseArray(numbersArray);
console.log(reversedNumbers); // Resultaat: [5, 4, 3, 2, 1]
const words = ["apple", "banana", "cherry"];
const reversedWords = reverseArray(words);
console.log(reversedWords); // Resultaat: ["cherry", "banana", "apple"]
class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        return this.items.pop() || null;
    }
    peek() {
        return this.items[this.items.length - 1] || null;
    }
    isEmpty() {
        return this.items.length === 0;
    }
}
const numberStack = new Stack();
console.log(numberStack.isEmpty());
numberStack.push(10);
console.log(numberStack.peek()); // Outputs: 10
const stringStack = new Stack();
stringStack.push("apple");
stringStack.push("banana");
console.log(stringStack.pop()); // Resultaat: "banana"
console.log(stringStack.isEmpty());
// Queue
class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(element) {
        this.items.push(element);
    }
    dequeue() {
        return this.items.shift() || null;
    }
    front() {
        return this.items[0] || null;
    }
    isEmpty() {
        return this.items.length === 0;
    }
}
const stringQueue = new Queue();
stringQueue.enqueue("apple");
console.log(stringQueue.front()); // Outputs: apple
// Trees
class BinaryTreeNode {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}
const rootNode = new BinaryTreeNode(10);
const leftChild1 = new BinaryTreeNode(5);
const rightChild1 = new BinaryTreeNode(15);
rootNode.left = leftChild1;
rootNode.right = rightChild1;
console.log(rootNode);
const leftChild2 = new BinaryTreeNode(3);
const rightChild2 = new BinaryTreeNode(8);
leftChild1.left = leftChild2;
leftChild1.right = rightChild2;
console.log(rootNode);
