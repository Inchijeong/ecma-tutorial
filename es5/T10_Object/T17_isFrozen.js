var obj = {}
Object.defineProperties(obj, {
  book: { value: "HarryPotter" }
});
console.log(Object.isFrozen(obj)); // false

Object.seal(obj);
console.log(Object.isFrozen(obj)); // true