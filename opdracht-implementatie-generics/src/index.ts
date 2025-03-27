interface QueueElement<T> {
  value: T;
  priority: number;
}

class PriorityQueue<T> {
  elements: QueueElement<T>[] = [];

  enqueue(value: T, priority: number): void {
    const element: QueueElement<T> = { value, priority };
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

  displayElements(): void {
    this.elements.forEach((element, index) => {
      console.log(
        `${index + 1}: Value = ${element.value}, Priority = ${element.priority}`
      );
    });
  }

  dequeue(): T | undefined {
    const element = this.elements.shift();
    if (element) {
      return element.value;
    }
    return undefined;
  }

  peek(): T | undefined {
    if (this.elements.length > 0 && this.elements[0]) {
      return this.elements[0].value;
    }
    return undefined;
  }

  isEmpty(): boolean {
    return this.elements.length === 0;
  }
}

const priorityQueue = new PriorityQueue<string>();

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
