import { it, describe, expect } from "vitest";
import { BST } from "../../../../dataStructures/tree";

describe.sequential("remove value scenarios", () => {
  it("should remove value 2", () => {
    let tree = new BST();

    tree.insert(5);
    tree.insert(2);
    tree.insert(4);
    tree.insert(1);

    expect(tree.contains(2)).toBe(true);
    tree.remove(2);
    expect(tree.contains(2)).toBe(false);
  });

  it("should do nothing", () => {
    let tree = new BST();

    tree.insert(5);
    tree.insert(2);
    tree.insert(4);
    tree.insert(1);

    expect(tree.contains(6)).toBe(false);
    tree.remove(6);
    expect(tree.contains(6)).toBe(false);
  });

  it("should remove the lowest value", () => {
    let tree = new BST();

    tree.insert(5);
    tree.insert(2);
    tree.insert(4);
    tree.insert(1);

    expect(tree.contains(1)).toBe(true);
    tree.remove(1);
    expect(tree.contains(1)).toBe(false);
  });

  it("should remove the highest value", () => {
    let tree = new BST();

    tree.insert(5);
    tree.insert(2);
    tree.insert(4);
    tree.insert(1);
    tree.insert(6);

    expect(tree.contains(6)).toBe(true);
    tree.remove(6);
    expect(tree.contains(6)).toBe(false);
  });

  it("should remove the root value", () => {
    let tree = new BST();

    tree.insert(5);
    tree.insert(2);
    tree.insert(4);
    tree.insert(1);
    tree.insert(7);
    tree.insert(9);
    /*
            Before        5
                        /   \
                       2     7
                      / \     \
                     1   4     9
    */
    expect(tree.contains(5)).toBe(true);
    tree.remove(5);
    expect(tree.contains(5)).toBe(false);
    /*
            After         7
                        /   \
                       2     9
                      / \     
                     1   4     
    */
  });

  it("should remove the only node", () => {
    let tree = new BST();

    tree.insert(5);

    expect(tree.contains(5)).toBe(true);
    tree.remove(5);
    expect(tree.contains(5)).toBe(false);
  });
});
