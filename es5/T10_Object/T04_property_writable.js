var obj = {};
Object.defineProperty(obj, 'movie', {
  value: 'HarryPotter',
  writable: true
});

obj.book = "Leon"
console.log(obj.book); // Leon

// ---

var obj2 = {};
Object.defineProperty(obj2, 'fruit', {
  value: 'Banana',
  writable: false
});

obj2.fruit = "Apple"
console.log(obj2.fruit); // Banana