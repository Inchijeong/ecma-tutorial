var obj = {}
Object.defineProperties(obj, {
  book: { value: 'HarryPotter' }
});
console.log(Object.isExtensible(obj)); // true

Object.preventExtensions(obj);
console.log(Object.isExtensible(obj)); // false