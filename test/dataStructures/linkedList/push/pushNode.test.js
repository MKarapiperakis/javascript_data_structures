import { it,expect } from "vitest";
import { LinkedList } from "../../../../dataStructures/linkedList";


it("should push node", () => {
  let myLinkedList = new LinkedList(2);
  myLinkedList.push(1);

  expect(myLinkedList.getTail()).toBe(1);
});
