function* infinite() {

  let index = 0;

  while(true) {
    yield index++;
  }
}

const generator = infinite();

console.log(generator.next().value); // 0
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.return()); // 3 그리고 종료