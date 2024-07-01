import { it, describe, expect } from "vitest";
import { BST } from "../../../../dataStructures/tree";

describe.sequential("return minimum value scenarios", () => {
  it("should return 1", () => {
    let tree = new BST();

    tree.insert(5);
    tree.insert(2);
    tree.insert(4);
    tree.insert(1);

    expect(tree.findMin()).toBe(1);
  });

  it("should return 1", () => {
    let tree = new BST();

    tree.insert(5);

    expect(tree.findMin()).toBe(5);
  });
});
