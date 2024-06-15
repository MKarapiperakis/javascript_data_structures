import { it, expect } from "vitest";
import { LinkedList } from "../../../../dataStructures/linkedList";

it("should insert node", () => {
  let myLinkedList = new LinkedList(2);
  myLinkedList.push("test");

  myLinkedList.insert(1, 2);

  expect(myLinkedList.get(1).value).toBe(2);
});
