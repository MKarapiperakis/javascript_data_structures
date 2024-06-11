import { it, describe } from "vitest";
import chalk from "chalk";
import { LinkedList } from "../../../../dataStructures/linkedList";
const log = console.log;

it("should unshift node", () => {
  log(
    chalk.blue.bgGreen(`------------------ unshift test 1 ------------------`)
  );

  let myLinkedList = new LinkedList(2);
  log(chalk.blue("-----------------"));

  console.log("Before unshift():");

  console.log("\nLinked List:");
  myLinkedList.printList();

  myLinkedList.unshift(1);

  console.log("\nAfter unshift():");

  console.log("\nLinked List:");
  myLinkedList.printList();

  log(chalk.blue("-----------------"));
});
