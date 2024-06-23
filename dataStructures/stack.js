class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
  }

  printStack() {
    let temp = this.top;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getTop() {
    if (this.top === null) {
      return null;
    } else {
      return this.top.value;
    }
  }

  getLength() {
    return this.length;
  }

  makeEmpty() {
    this.top = null;
    this.height = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
  }
}
