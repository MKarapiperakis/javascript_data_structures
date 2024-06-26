import { it, describe, expect } from "vitest";
import { BST } from "../../../dataStructures/tree";

describe.sequential("constructor scenarios", () => {
  it("should return null", () => {
    let tree = new BST();

    expect(tree.root).toBe(null);
  });
});
