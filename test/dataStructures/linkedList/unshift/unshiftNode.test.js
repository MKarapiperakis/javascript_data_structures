import { it } from "vitest";
import { LinkedList } from "../../../../dataStructures/linkedList";

it("should unshift node", () => {
  let myLinkedList = new LinkedList(2);
  myLinkedList.unshift(1);

  expect(myLinkedList.getHead()).toBe(1);
});
