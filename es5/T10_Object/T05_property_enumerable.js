var obj = {};
Object.defineProperty(obj, 'movie', {
  value: 'HarryPotter',
  enumerable: true
});

for (var name in obj){
  console.log('obj1: ' + obj[name]); // obj1: HarryPotter
}
console.log(Object.keys(obj)); // [ 'movie' ]

// ---

var obj2 = {};
Object.defineProperty(obj2, 'fruit', {
  value: 'Banana',
  enumerable: false
});

for (var name in obj2){
  console.log('obj2: ' + obj[name]); //
}
console.log(Object.keys(obj2)); // []