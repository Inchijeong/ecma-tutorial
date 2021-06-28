var obj = {}
Object.defineProperties(obj, {
  book: { value: "HarryPotter" }
});
console.log(Object.isSealed(obj)); // false

Object.seal(obj);
console.log(Object.isSealed(obj)); // true