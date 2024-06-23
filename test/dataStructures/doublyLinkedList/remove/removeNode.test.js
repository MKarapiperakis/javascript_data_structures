import { it } from "vitest";
import { DoublyLinkedList } from "../../../../dataStructures/doublyLinkedList";

describe.sequential("remove scenarios", () => {
  it("should remove node", () => {
    let DLL = new DoublyLinkedList(2);
    DLL.push("test");
    DLL.remove(0);

    expect(DLL.getHead()).toBe("test");
  });

  it("should be null", () => {
    let DLL = new DoublyLinkedList(2);
    DLL.remove(0);

    expect(DLL.getHead()).toBe(null);
  });
});
