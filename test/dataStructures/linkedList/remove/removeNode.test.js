import { it, describe, expect } from "vitest";
import { LinkedList } from "../../../../dataStructures/linkedList";

describe.sequential("remove scenarios", () => {
  it("should remove node", () => {
    let myLinkedList = new LinkedList(2);
    myLinkedList.remove(0);

    expect(myLinkedList.get(0)).toBe(undefined);
  });

  it("should remove node", () => {
    let myLinkedList = new LinkedList(2);
    myLinkedList.push("test");
    myLinkedList.remove(0);

    expect(myLinkedList.get(0).value).toBe("test");
  });

  it("should return undefined", () => {
    let myLinkedList = new LinkedList(2);

    expect(myLinkedList.get(1)).toBe(undefined);
  });
});
