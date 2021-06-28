var obj = {};
Object.defineProperty(obj, 'movie', {
  value: 'HarryPotter',
  configurable: true
});

delete obj.movie;
console.log(obj.movie); // undefined

// ---

var obj2 = {};
Object.defineProperty(obj2, 'fruit', {
  value: 'Banana',
  configurable: false
});

delete obj2.fruit;
console.log(obj2.fruit); // Banana