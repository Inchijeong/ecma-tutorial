var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);

function myFunction(value) {
  return value * 2;
}

console.log(numbers2); // [ 90, 8, 18, 32, 50 ]