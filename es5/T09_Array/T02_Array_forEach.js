var num = 0;
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value) {
  num += value;
}

console.log(num); // 99