import { it, expect } from "vitest";
import { Stack } from "../../../../dataStructures/stack";

it("should push node in stack", () => {
  let stack = new Stack(2);
  stack.clear();
  stack.push(1);

  expect(stack.getTop()).toBe(1);
});
