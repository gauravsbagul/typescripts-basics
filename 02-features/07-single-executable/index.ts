// deno install index.js

import { green, underline } from "https://deno.land/std/fmt/colors.ts";

console.log(`This is ${green("green")} text`);
console.log(`This is ${underline("underline")} text`);
// setTimeout(() => {
//   Deno.writeTextFile(
//     "./sample.txt",
//     new Date()
//       .toString(),
//   );
// }, 5000);
