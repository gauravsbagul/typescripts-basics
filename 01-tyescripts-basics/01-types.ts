// Implicit types
let ageImplicit = 15;
//  ageImplicit; = "foo"
console.log(ageImplicit);

// Explicit types
let ageExplicit;
ageExplicit = 15;
ageExplicit = "foo";

console.log(ageExplicit);

// Functions

function add(a: any, b: any) {
  return a + b;
}

console.log(add(3, 5));

// null and undefined

function someFunc(n: number) {
  if (n % 2 === 0) {
    return "even";
  }
  return null;
}

const value = someFunc(1);
console.log("TCL:: value", value);
value?.substring(1);

// void
function hello(name: string) {
  console.log(`Hello ${name}`);
}

hello("gaurav");

// array
let fruits = ["orange", "apple", "banana"];
fruits[1] = true;
