import { it, expect } from "vitest";
import { LinkedList } from "../../../../dataStructures/linkedList";

it("should set node", () => {
  let myLinkedList = new LinkedList(2);
  myLinkedList.push("test");

  myLinkedList.set(1, 55);

  expect(myLinkedList.get(1).value).toBe(55);
});
