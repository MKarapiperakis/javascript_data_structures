class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  printQueue() {
    let temp = this.first;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getFirst() {
    if (this.last === null) return null;
    else return this.first.value;
  }

  getLast() {
    if (this.last === null) return null;
    else return this.last.value;
  }

  getLength() {
    return this.length;
  }

  clear() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
}
