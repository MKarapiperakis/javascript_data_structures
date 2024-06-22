import { it, describe, expect } from "vitest";
import { DoublyLinkedList } from "../../../../dataStructures/doublyLinkedList";

it("should insert node", () => {
    let DLL = new DoublyLinkedList(2);
    DLL.push("test");
  
    DLL.insert(1, 2);
  
    expect(DLL.get(1).value).toBe(2);
  });
  