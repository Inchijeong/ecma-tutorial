var obj = {};
Object.defineProperties(obj, {
  book: { value: 'HarryPotter' },
  point: { value: 123 }
});

console.log(Object.getOwnPropertyNames(obj));
// [ 'book', 'point' ]