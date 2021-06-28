var numbers1 = [45, 4, 9, 16, 25];
var diff = numbers1.reduceRight(myFunction);

function myFunction(total, value) {
  return total - value;
}

console.log(diff); // -49