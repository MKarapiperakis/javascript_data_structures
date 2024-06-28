import { it, describe, expect } from "vitest";
import { BST } from "../../../../dataStructures/tree";

describe.sequential("contains scenarios", () => {
  it("should return true", () => {
    let tree = new BST();

    tree.insert(5);

    expect(tree.contains(5)).toBe(true);
  });

  it("should return true", () => {
    let tree = new BST();

    tree.insert(5);
    tree.insert(2);

    expect(tree.contains(2)).toBe(true);
  });

  it("should return false", () => {
    let tree = new BST();

    tree.insert(5);
    tree.insert(1);

    expect(tree.contains(2)).toBe(false);
  });
});
