import { it, describe, expect } from "vitest";
import { LinkedList } from "../../../../dataStructures/linkedList";

describe.sequential("reverse scenarios", () => {
  it("should reverse list and return head", () => {
    let myLinkedList = new LinkedList(2);
    myLinkedList.push("test");

    myLinkedList.reverse();

    expect(myLinkedList.getHead()).toBe("test");
  });

  it("should reverse list and return tail", () => {
    let myLinkedList = new LinkedList(2);
    myLinkedList.push("test");

    myLinkedList.reverse();

    expect(myLinkedList.getTail()).toBe(2);
  });

  it("should return undefined", () => {
    let myLinkedList = new LinkedList(2);
    myLinkedList.clear();

    expect(myLinkedList.shift()).toBe(undefined);
  });
});
