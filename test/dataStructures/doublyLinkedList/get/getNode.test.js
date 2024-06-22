import { it, describe, expect } from "vitest";
import { DoublyLinkedList } from "../../../../dataStructures/doublyLinkedList";

describe.sequential("Doubly linked lists pop scenarios", () => {
  //first if case
  it("should get node", () => {
    let DLL = new DoublyLinkedList(2);
    DLL.push(1);

    expect(DLL.get(1).value).toBe(1);
  });

  //second if case
  it("should get node", () => {
    let DLL = new DoublyLinkedList(2);
    DLL.push(1);
    DLL.push(5);
    DLL.push(8);
    DLL.push(15);
    DLL.push(21);

    expect(DLL.get(4).value).toBe(15);
  });

  it("should return undefined", () => {
    let DLL = new DoublyLinkedList(2);

    expect(DLL.get(1)).toBe(undefined);
  });

  it("should return undefined", () => {
    let DLL = new DoublyLinkedList();

    expect(DLL.get(-1)).toBe(undefined);
  });
});
