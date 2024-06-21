import { it } from "vitest";
import { DoublyLinkedList } from "../../../../dataStructures/doublyLinkedList";

it("should unshift node", () => {
  let DLL = new DoublyLinkedList(1);

  DLL.unshift(1);

  expect(DLL.getHead()).toBe(1);
});
