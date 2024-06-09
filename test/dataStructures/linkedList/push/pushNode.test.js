import { it } from "vitest";
import { LinkedList } from "../../../../dataStructures/linkedList";
import chalk from 'chalk';

it("should push node", () => {
  let myLinkedList = new LinkedList(2);
  //myLinkedList.clear();
  myLinkedList.push(1);

  myLinkedList.getHead();
  myLinkedList.getTail();
  myLinkedList.getLength();
  console.log("\nLinked List:");
  myLinkedList.printList();
});
