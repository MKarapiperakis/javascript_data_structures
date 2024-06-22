import { it } from "vitest";
import { DoublyLinkedList } from "../../../../dataStructures/doublyLinkedList";

describe.sequential("set scenarios", () => {
  it("should set node", () => {
    let DLL = new DoublyLinkedList(2);
    DLL.set(0, "test");

    expect(DLL.getHead()).toBe("test");
  });

  it("should be null", () => {
    let DLL = new DoublyLinkedList(2);
    DLL.pop();
    DLL.set(0, "test");

    expect(DLL.getHead()).toBe(null);
  });
});
