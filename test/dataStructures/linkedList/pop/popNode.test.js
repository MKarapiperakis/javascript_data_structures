import { it, describe } from "vitest";
import chalk from "chalk";
import { LinkedList } from "../../../../dataStructures/linkedList";
const log = console.log;

describe("pop scenarios", () => {
  it("should pop node", () => {
    log(chalk.blue.bgGreen(`------------------ pop test 1 ------------------`));
    console.log(`Two items in list and pop one`);
    let myLinkedList = new LinkedList(2);

    myLinkedList.push(1);

    if (myLinkedList.length !== 0) console.log(myLinkedList.pop());
    else console.log("null");
  });

  it("should pop node", () => {
    log(chalk.blue.bgGreen(`------------------ pop test 2 ------------------`));
    console.log(`One item in list and pop one`);
    let myLinkedList = new LinkedList(2);

    if (myLinkedList.length !== 0) console.log(myLinkedList.pop());
    else console.log("null");
  });

  it("should return null", () => {
    log(chalk.blue.bgGreen(`------------------ pop test 3 ------------------`));
    console.log(`Zero items in list and pop one`);
    let myLinkedList = new LinkedList(2);
    myLinkedList.clear();

    if (myLinkedList.length !== 0) console.log(myLinkedList.pop());
    else console.log("null");
  });
});
