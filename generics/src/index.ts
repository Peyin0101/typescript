function getFirstItem<T>(items: T[]): T {
  return items[0];
}

let numbers = [1, 2, 3];
console.log(getFirstItem(numbers)); // Outputs: 1

let strings = ["apple", "banana", "cherry"];
console.log(getFirstItem(strings)); // Outputs: apple

function reverseArray<T>(array: T[]): T[] {
  return array.reverse();
}

// Gebruik van de generieke reverseArray-functie
const numbersArray: number[] = [1, 2, 3, 4, 5];
const reversedNumbers = reverseArray(numbersArray);
console.log(reversedNumbers); // Resultaat: [5, 4, 3, 2, 1]
const words: string[] = ["apple", "banana", "cherry"];
const reversedWords = reverseArray(words);
console.log(reversedWords); // Resultaat: ["cherry", "banana", "apple"]

class Stack<T> {
  private items: T[] = [];

  push(element: T): void {
    this.items.push(element);
  }
  pop(): T | null {
    return this.items.pop() || null;
  }
  peek(): T | null {
    return this.items[this.items.length - 1] || null;
  }
  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

const numberStack = new Stack<number>();
console.log(numberStack.isEmpty());
numberStack.push(10);
console.log(numberStack.peek()); // Outputs: 10

const stringStack = new Stack<string>();
stringStack.push("apple");
stringStack.push("banana");
console.log(stringStack.pop()); // Resultaat: "banana"
console.log(stringStack.isEmpty());

// Queue

class Queue<T> {
  private items: T[] = [];

  enqueue(element: T): void {
    this.items.push(element);
  }

  dequeue(): T | null {
    return this.items.shift() || null;
  }

  front(): T | null {
    return this.items[0] || null;
  }
  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

const stringQueue = new Queue<string>();
stringQueue.enqueue("apple");
console.log(stringQueue.front()); // Outputs: apple

// Trees

class BinaryTreeNode<T> {
  value: T;
  left: BinaryTreeNode<T> | null = null;
  right: BinaryTreeNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

const rootNode = new BinaryTreeNode<number>(10);
const leftChild1 = new BinaryTreeNode<number>(5);
const rightChild1 = new BinaryTreeNode<number>(15);
rootNode.left = leftChild1;
rootNode.right = rightChild1;

console.log(rootNode);

const leftChild2 = new BinaryTreeNode<number>(3);
const rightChild2 = new BinaryTreeNode<number>(8);

leftChild1.left = leftChild2;
leftChild1.right = rightChild2;

console.log(rootNode);
