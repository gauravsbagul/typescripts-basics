// const dir = Deno.args[0];
// console.log("TCL:: path", dir);

// const path = `${Deno.cwd()}/${dir}`;
// console.log("TCL:: path", path);

// for await (const directory of Deno.readDir(path)) {
//   console.log("TCL:: directory:-", directory.name);
// }

async function exists(path: string) {
  try {
    const stat = await Deno.lstat(path);
    return true;
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      return false;
    } else {
      throw error;
    }
  }
}

const fileExistsFalse = await exists("1.txt");
console.log("TCL:: fileExistsFalse", fileExistsFalse);
const fileExistsTrue = await exists("sample.txt");
console.log("TCL:: fileExistsTrue", fileExistsTrue);

// Create Directory
await Deno.mkdir("test");

await Deno.rename("test", "test2");

await Deno.remove("test2");
