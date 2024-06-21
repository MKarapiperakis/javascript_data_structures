import { it } from "vitest";
import { DoublyLinkedList } from "../../../../dataStructures/doublyLinkedList";

describe.sequential("shift scenarios", () => {
  it("should shift node", () => {
    let DLL = new DoublyLinkedList(2);
    DLL.shift();

    expect(DLL.getHead()).toBe(null);
  });

  it("should shift node", () => {
    let DLL = new DoublyLinkedList(2);
    DLL.push("new");
    DLL.shift();

    expect(DLL.getHead()).toBe("new");
  });

  it("should return null", () => {
    let DLL = new DoublyLinkedList(2);
    DLL.pop();
    DLL.shift();

    expect(DLL.getHead()).toBe(null);
  });
});
