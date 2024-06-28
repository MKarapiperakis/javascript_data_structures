import { it, describe, expect } from "vitest";
import { BST } from "../../../../dataStructures/tree";

describe.sequential("insert scenarios", () => {
  it("should insert new node", () => {
    let tree = new BST();

    tree.insert(5);

    expect(tree.root.value).toBe(5);
  });

  it("should insert new node", () => {
    let tree = new BST();

    tree.insert(5);
    tree.insert(7);

    expect(tree.root.right.value).toBe(7);
  });

  it("should insert new node", () => {
    let tree = new BST();

    tree.insert(5);
    tree.insert(7);
    tree.insert(3);

    expect(tree.root.left.value).toBe(3);
  });

  it("should return undefined", () => {
    let tree = new BST();

    tree.insert(5);
    expect(tree.insert(5)).toBe(undefined);
  });
});
