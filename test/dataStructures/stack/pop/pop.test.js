import { it, describe, expect } from "vitest";
import { Stack } from "../../../../dataStructures/stack";

describe.sequential("pop scenarios in stacks", () => {
  it("should pop node", () => {
    let stack = new Stack(2);

    expect(stack.pop().value).toBe(2);
  });

  

  it("should return null", () => {
    let stack = new Stack(2);
    stack.clear()

    expect(stack.pop()).toBe(undefined);
  });
});
