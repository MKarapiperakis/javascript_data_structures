import { LinkedList } from "./dataStructures/linkedList.js";

function listInfo() {
  let myLinkedList = new LinkedList(4);

  myLinkedList.getHead();
  myLinkedList.getTail();
  myLinkedList.getLength();
  console.log("\nLinked List:");
  myLinkedList.printList();
}

listInfo();
