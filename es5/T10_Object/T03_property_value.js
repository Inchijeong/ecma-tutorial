var obj = {};

Object.defineProperty(obj, 'book', {
  value: 'HarryPotter',
  enumerable: true,
  configurable: true
});

console.log(obj); // { book: 'HarryPotter' }

// ---

var obj2 = {};

Object.defineProperty(obj, 'fruit', {
  value: 'banana',
  enumerable: true,
  writable: true,
  configurable: true,
  get frt() {
    return this.fruit;
  },
  set frt(value) {
    this.fruit = value;
  }
});

console.log(obj2); // {}