import { LinkedList } from "./dataStructures/linkedList.js";

function listInfo() {
  let myLinkedList = new LinkedList(4);

  //myLinkedList.clear();
  myLinkedList.push(1);
  myLinkedList.push(2);

  myLinkedList.getHead();
  myLinkedList.getTail();
  myLinkedList.getLength();
  console.log("\nLinked List:");
  myLinkedList.printList();
}

listInfo();
