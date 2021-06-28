var obj = {};
Object.defineProperties(obj, {
  book: { value: 'HarryPotter', enumerable: true },
  fruit: { value: 'Banana', enumerable: true },
  point: { value: 123 }	// enumerable: false
});

console.log(Object.keys(obj));
// [ 'book', 'fruit' ]