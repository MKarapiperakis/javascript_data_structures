import { LinkedList } from "./dataStructures/linkedList.js";

function listInfo() {
  let myLinkedList = new LinkedList(4);

  //push nodes
  //myLinkedList.clear();
  myLinkedList.push(1);
  myLinkedList.push(2);

  //pop nodes
  if (myLinkedList.length !== 0) console.log(myLinkedList.pop());
  else console.log("null");

  if (myLinkedList.length !== 0) console.log(myLinkedList.pop().value);
  else console.log("null");

  if (myLinkedList.length !== 0) console.log(myLinkedList.pop().value);
  else console.log("null");

  myLinkedList.getHead();
  myLinkedList.getTail();
  myLinkedList.getLength();
  console.log("\nLinked List:");
  myLinkedList.printList();
}

listInfo();
