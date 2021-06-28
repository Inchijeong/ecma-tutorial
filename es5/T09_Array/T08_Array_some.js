var numbers = [45, 4, 9, 16, 25];
var someOver18 = numbers.some(myFunction);

function myFunction(value) {
  return value > 18;
}

console.log(someOver18); // true