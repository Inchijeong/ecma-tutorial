function Person(name) {
  this.name = name;
}

Person.prototype.sayMyName = function() {
  console.log('My name is ' + this.name);
}

var person1 = new Person('icj');
person1.sayMyName(); // My name is icj