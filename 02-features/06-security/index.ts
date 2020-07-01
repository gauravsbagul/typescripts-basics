// Read current working directory       --allow-read
// console.log(Deno.cwd());

// Read file content and output         --allow-read
// const content = await Deno.readTextFile("./read.txt");
// console.log("content", content);

// Write content into file              --allow-write

// Deno.writeTextFile("./write.txt", "123");

// Environmental access

// Deno.env.get("TEST");

const json = await fetch("https://jsonplaceholder.typicode.com/todos/1").then((
  response,
) => response.json());
console.log("TCL:: json", json);
