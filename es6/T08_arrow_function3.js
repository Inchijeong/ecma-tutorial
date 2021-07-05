const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 함수 표현식
const numbersOverFive = numbers.filter(function(number) {
  return number > 5;
});

console.log(numbersOverFive); // [ 6, 7, 8, 9, 10 ]

// 화살표 함수로 콜백함수 표현
const numbersOverFive2 = numbers.filter(number => number > 5);

console.log(numbersOverFive2); // [ 6, 7, 8, 9, 10 ]