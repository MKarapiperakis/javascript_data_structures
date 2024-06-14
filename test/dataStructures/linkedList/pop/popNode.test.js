import { it, describe,expect } from "vitest";
import { LinkedList } from "../../../../dataStructures/linkedList";


describe.sequential("pop scenarios", () => {
  it("should pop node", () => {
    let myLinkedList = new LinkedList(2);
    myLinkedList.push(1);

    expect(myLinkedList.pop().value).toBe(1);
  });

  it("should pop node", () => {
    let myLinkedList = new LinkedList(2);

    expect(myLinkedList.pop().value).toBe(2);
  });

  it("should return null", () => {
    let myLinkedList = new LinkedList(2);
    myLinkedList.clear();

    expect(myLinkedList.pop()).toBe(undefined);
  });
});
