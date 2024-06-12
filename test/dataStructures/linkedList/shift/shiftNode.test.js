import { it, describe } from "vitest";
import chalk from "chalk";
import { LinkedList } from "../../../../dataStructures/linkedList";
const log = console.log;

describe("shift scenarios", () => {
  it("should shift node", () => {
    log(
      chalk.blue.bgGreen(`------------------ shift test 1 ------------------`)
    );
    console.log(`Two items in list and shift one`);
    let myLinkedList = new LinkedList(2);

    myLinkedList.push(1);

    if (myLinkedList.length !== 0) console.log(myLinkedList.shift().value);
    else console.log("null");
  });

  it("should shift node", () => {
    log(
      chalk.blue.bgGreen(`------------------ shift test 2 ------------------`)
    );
    console.log(`One item in list and shift one`);
    let myLinkedList = new LinkedList(2);

    if (myLinkedList.length !== 0) console.log(myLinkedList.shift().value);
    else console.log("null");
  });

  it("should return null", () => {
    log(
      chalk.blue.bgGreen(`------------------ shift test 3 ------------------`)
    );
    console.log(`Zero items in list and shift one`);
    let myLinkedList = new LinkedList(2);
    myLinkedList.clear();

    if (myLinkedList.length !== 0) console.log(myLinkedList.shift().value);
    else console.log("null");
  });
});
