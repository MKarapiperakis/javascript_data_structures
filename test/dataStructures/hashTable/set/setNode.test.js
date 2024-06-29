import { it, describe, expect } from "vitest";
import { HashTable } from "../../../../dataStructures/hashTable";

describe.sequential("set scenarios", () => {
  it("should set node", () => {
    let HT = new HashTable();

    let index = HT._hash("value");
    HT.set("value", 100);
    HT.set("value", 500);

    expect(HT["dataMap"][index][0]).toStrictEqual(["value", 100]);
  });

  it("should set node", () => {
    let HT = new HashTable();

    let index = HT._hash("test");
    HT.set("test", 100);
    HT.set("test", 500);

    expect(HT["dataMap"][index][1]).toStrictEqual(["test", 500]);
  });

  it("should set node", () => {
    let HT = new HashTable(1);

    expect(HT.set("test2", 1)).toEqual({
      dataMap: [[["test2", 1]]],
    });
  });
});
