import { it, describe, expect } from "vitest";
import { HashTable } from "../../../../dataStructures/hashTable";

describe.sequential("get scenarios", () => {
  it("should get node", () => {
    let HT = new HashTable();

    HT.set("value", 100);

    expect(HT.get("value")).toBe(100);
  });

  it("should get node", () => {
    let HT = new HashTable();

    HT.set("value", 400);
    HT.set("value", 500);

    expect(HT.get("value")).toBe(400);
  });
});
