// const map = new Map<number, string>();
// map.set(1, "foo");

class MyMap extends Map<number, string> {
}
class User {
}

function getPromise<T extends User>(value: T): Promise<T> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(value);
    }, 1000);
  });
}

const result = await getPromise(new User());
console.log("TCL:: result", result);
console.timeEnd();
