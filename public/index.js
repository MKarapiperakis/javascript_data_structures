class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getHead() {
    if (this.head === null) {
      return null;
    } else {
      return this.head.value;
    }
  }

  getTail() {
    if (this.tail === null) {
      return null;
    } else {
      return this.tail.value;
    }
  }

  getLength() {
    return this.length;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    updateDropdown();
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    updateDropdown();
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;

    let temp = this.head;
    let pre = this.head;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    this.tail = pre;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    updateDropdown();
    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    updateDropdown();
    return this;
  }

  shift() {
    if (this.length === 0) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    temp.next = null;
    updateDropdown();
    return temp;
  }

  get(index, value = true) {
    if (index < 1 || index > this.length) return undefined;
    let temp = this.head;
    for (let i = 1; i < index; i++) {
      temp = temp.next;
    }
    if (value) return temp.value;
    else return temp;
  }
}

let list;

if (!list) {
  document.getElementById("output").style.display = "none";
  document.getElementById("outputNode").style.display = "none";
  document.getElementById("pushContainer").style.display = "none";
  document.getElementById("unshiftContainer").style.display = "none";
}

function createLinkedList() {
  document.getElementById("output").style.display = "block";
  document.getElementById("outputNode").style.display = "block";
  const initialValue = document.getElementById("initialValue").value;
  if (initialValue.trim() === "") initialValue = "0";
  list = new LinkedList(initialValue);
  printOutput("Linked List created with initial value: " + initialValue);
  printList();
  document.getElementById("initialValue").value = "";
  document.getElementById("pushContainer").style.display = "flex";
  document.getElementById("unshiftContainer").style.display = "flex";
  updateDropdown();
}

function pushValue() {
  const value = document.getElementById("pushValue").value;
  if (value.trim() === "") value = "0";
  list.push(value);
  printOutput("Pushed value: " + value);
  printList();
  if (list.length > 0) {
    document.getElementById("outputNode").style.display = "block";
  }
  document.getElementById("pushValue").value = "";
}

function unshiftValue() {
  const value = document.getElementById("unshiftValue").value;
  if (value.trim() === "") value = "0";
  list.unshift(value);
  printOutput("Unshifted value: " + value);
  printList();
  document.getElementById("unshiftValue").value = "";
}

function popValue() {
  const popped = list.pop();
  printOutput("Popped value: " + (popped ? popped.value : "List is empty"));
  printList();

  if (list.length === 0) {
    document.getElementById("outputNode").style.display = "none";
  }
}

function shiftValue() {
  const shifted = list.shift();
  printOutput("Shifted value: " + (shifted ? shifted.value : "List is empty"));

  printList();

  if (list.length === 0) {
    document.getElementById("outputNode").style.display = "none";
  }
}

function printList() {
  let output = "";
  let temp = list.head;
  while (temp !== null) {
    output += temp.value + " -> ";
    temp = temp.next;
  }
  output += "null";
  printOutput2(output);
}

function clearList() {
  document.getElementById("outputNode").style.display = "none";
  document.getElementById("pushContainer").style.display = "none";
  document.getElementById("unshiftContainer").style.display = "none";
  list.clear();
  printOutput("List cleared");
  printList();
}

function getHead() {
  const head = list.getHead();
  printOutput("Head value: " + (head !== null ? head : "List is empty"));

  const nodes = document.getElementsByClassName("node");
  if (nodes.length > 0) {
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].classList.remove("head-node");
      nodes[i].classList.remove("tail-node");
      nodes[i].classList.remove("length-node");
    }

    nodes[0].classList.add("head-node");
  }
}

function getTail() {
  const tail = list.getTail();
  printOutput("Tail value: " + (tail !== null ? tail : "List is empty"));

  const nodes = document.getElementsByClassName("node");
  if (nodes.length > 0) {
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].classList.remove("head-node");
      nodes[i].classList.remove("tail-node");
      nodes[i].classList.remove("length-node");
    }
    nodes[list.length - 1].classList.add("tail-node");
  }
}

function getLength() {
  const length = list.getLength();
  printOutput("List length: " + length);

  const nodes = document.getElementsByClassName("node");
  if (nodes.length > 0) {
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].classList.remove("head-node");
      nodes[i].classList.remove("tail-node");
      nodes[i].classList.add("length-node");
    }
  }
}

function updateDropdown() {
  const dropdown = document.getElementById("indexDropdown");
  dropdown.innerHTML =
    '<option value="" disabled selected>Select an index</option>';
  for (let i = 1; i <= list.length; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    dropdown.appendChild(option);
  }
}

function getNodeAtIndex() {
  const dropdown = document.getElementById("indexDropdown");
  const index = parseInt(dropdown.value);
  const node = list.get(index);
  document.getElementById("output").textContent = JSON.stringify(node, null, 2);

  const nodes = document.getElementsByClassName("node");
  if (nodes.length > 0) {
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].classList.remove("head-node");
      nodes[i].classList.remove("tail-node");
      nodes[i].classList.remove("length-node");
    }
    nodes[index - 1].classList.add("head-node");
  }
}

function getAllNodes() {
  const node = list.get(1, false);
  document.getElementById("output").textContent = JSON.stringify(node, null, 2);

  const nodes = document.getElementsByClassName("node");
  if (nodes.length > 0) {
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].classList.remove("head-node");
      nodes[i].classList.remove("tail-node");
      nodes[i].classList.add("length-node");
    }
  }
}

function printOutput(text) {
  let elements = text.split("->");

  elements.forEach((el) => console.log(`ELEMENT IS ${el}`));
  document.getElementById("output").textContent = text;
}

function printOutput2(text) {
  let elements = text.split(" -> ");

  // Clear the existing content
  const outputContainer = document.getElementById("outputNode");
  outputContainer.innerHTML = "";

  // Create and append new nodes for each element
  elements.forEach((el) => {
    if (el.trim() === "null") return; // Skip the 'null' text
    const node = document.createElement("div");
    node.className = "node";
    node.textContent = el.trim();

    // Create an arrow between nodes
    const arrow = document.createElement("div");
    arrow.className = "arrow";
    arrow.innerHTML = "→";

    outputContainer.appendChild(node);
    outputContainer.appendChild(arrow);
  });

  // Remove the last arrow
  if (outputContainer.lastChild) {
    outputContainer.removeChild(outputContainer.lastChild);
  }
}
