import { it, describe, expect } from "vitest";
import { Queue } from "../../../../dataStructures/queue";

describe.sequential("enqueue scenarios", () => {
  it("should return first node", () => {
    let myQueue = new Queue(4);
    myQueue.enqueue("test")

    expect(myQueue.dequeue().value).toBe(4);
  });

  it("should return first node", () => {
    let myQueue = new Queue(4);

    expect(myQueue.dequeue().value).toBe(4);
  });

  it("should return undefined", () => {
    let myQueue = new Queue(4);
    myQueue.clear();

    expect(myQueue.dequeue()).toBe(undefined);
  });
});
