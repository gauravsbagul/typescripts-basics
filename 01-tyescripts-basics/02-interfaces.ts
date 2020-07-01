interface Person {
  name: string;
  age: number;
  [key: string]: any;
  hello(): string;
}

let user: Person = {
  name: "Gaurav",
  age: 27,
  surname: "Bagul",
  hello() {
    return `Hello from ${this.name}`;
  },
};
