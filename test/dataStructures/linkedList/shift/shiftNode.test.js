import { it, describe, expect } from "vitest";
import { LinkedList } from "../../../../dataStructures/linkedList";

describe.sequential("shift scenarios", () => {
  it("should shift node", () => {
    let myLinkedList = new LinkedList(2);
    myLinkedList.push(1);

    expect(myLinkedList.shift().value).toBe(2);
  });

  it("should shift node", () => {
    let myLinkedList = new LinkedList(5);

    expect(myLinkedList.shift().value).toBe(5);
  });

  it("should return undefined", () => {
    let myLinkedList = new LinkedList(2);
    myLinkedList.clear();

    expect(myLinkedList.shift()).toBe(undefined);
  });
});
