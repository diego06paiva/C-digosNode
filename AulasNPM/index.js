import _ from "lodash";
import chalk from "chalk";
const a = [1, 2, 3, 4, 5];
const b = [6, 7, 8, 9, 10];

const diff = _.difference(a, b);
console.log(chalk.red.bold(diff));
