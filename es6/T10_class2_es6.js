class Person {
  constructor(name) {
    this.name = name;
  }

  sayMyName() {
    console.log(`My name is ${this.name}`);
  }
}

var person1 = new Person('icj');
person1.sayMyName(); // My name is icj