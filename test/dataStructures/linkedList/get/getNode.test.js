import { it, describe, expect } from "vitest";
import { LinkedList } from "../../../../dataStructures/linkedList";

describe.sequential("get scenarios", () => {
  it("should get node", () => {
    let myLinkedList = new LinkedList(2);
    myLinkedList.push(5);
    expect(myLinkedList.get(1).value).toBe(5);
  });

  it("should return undefined", () => {
    let myLinkedList = new LinkedList(2);
    expect(myLinkedList.get(1)).toBe(undefined);
  });

  it("should return undefined", () => {
    let myLinkedList = new LinkedList(2);
    expect(myLinkedList.get(-1)).toBe(undefined);
  });
});
