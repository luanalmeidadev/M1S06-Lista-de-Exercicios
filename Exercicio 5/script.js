import { filterPairs } from "./filterPairs.js";
import { oddSum } from "./oddsum.js";

let array = [1, 5, 8, 11, 14, 16];

console.log(`Números pares ${filterPairs(array)}`);
console.log(`Soma dos números impares ${oddSum(array)}`);