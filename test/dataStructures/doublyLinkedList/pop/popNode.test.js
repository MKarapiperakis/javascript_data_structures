import { it, describe, expect } from "vitest";
import { DoublyLinkedList } from "../../../../dataStructures/doublyLinkedList";

describe.sequential("Doubly linked lists pop scenarios", () => {
  it("should pop node", () => {
    let DLL = new DoublyLinkedList(2);
    DLL.push(1);

    expect(DLL.pop().value).toBe(1);
  });

  it("should pop node", () => {
    let DLL = new DoublyLinkedList(2);

    expect(DLL.pop().value).toBe(2);
  });

  it("should return null", () => {
    let DLL = new DoublyLinkedList();

    expect(DLL.pop().value).toBe(undefined);
  });
});
