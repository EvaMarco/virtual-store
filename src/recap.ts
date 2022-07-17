const myName = 'Eva';

// myName[Symbol]

const myAge = 39;
// myAge.toExponential

const suma = (a: number, b: number) => {
  return a + b;
};

suma(12, 23);

class Persona {
  // private age;
  // private name;

  // constructor(age: number, name: string) {
  //   this.age = age;
  //   this.name = name;
  // }

  constructor(private age: number, private name: string) {}

  getSummary() {
    return `my name is ${this.name}, and my age is ${this.age}`;
  }
}

const eva = new Persona(39, 'Eva');

eva.getSummary();
