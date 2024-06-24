import { it, describe, expect } from "vitest";
import { Queue } from "../../../dataStructures/queue";

describe.sequential("constructor scenarios", () => {
  it("should return first node", () => {
    let myQueue = new Queue(4);

    expect(myQueue.getFirst()).toBe(4);
  });

  it("should return length", () => {
    let myQueue = new Queue(4);

    expect(myQueue.getLength()).toBe(1);
  });
});
