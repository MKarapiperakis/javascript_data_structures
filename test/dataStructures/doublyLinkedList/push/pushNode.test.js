import { it,expect } from "vitest";
import { DoublyLinkedList } from "../../../../dataStructures/doublyLinkedList";


it("should push node", () => {
  let DLL = new DoublyLinkedList(1);
  DLL.push(2);

  expect(DLL.getTail()).toBe(2);
});
