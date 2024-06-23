import { it, describe, expect } from "vitest";
import { Stack } from "../../../dataStructures/stack";

describe.sequential("constructor scenarios", () => {
  it("should return top node", () => {
    let myStack = new Stack(4);

    expect(myStack.getTop()).toBe(4);
  });

  it("should return length", () => {
    let myStack = new Stack(4);

    expect(myStack.getLength()).toBe(1);
  });
});
