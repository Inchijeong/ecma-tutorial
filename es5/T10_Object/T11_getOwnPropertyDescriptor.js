var obj = {};
Object.defineProperty(obj, 'book', {
  value: 'HarryPotter',
  writable: true,
  enumerable: true
});

console.log(Object.getOwnPropertyDescriptor(obj, 'book'));
// { value: 'HarryPotter',
//   writable: true,
//   enumerable: true,
//   configurable: false }