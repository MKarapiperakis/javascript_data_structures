import { it, describe, expect } from "vitest";
import { Queue } from "../../../../dataStructures/queue";

describe.sequential("enqueue scenarios", () => {
  it("should return last node", () => {
    let myQueue = new Queue(4);
    myQueue.enqueue(1);

    expect(myQueue.getLast()).toBe(1);
  });
});
