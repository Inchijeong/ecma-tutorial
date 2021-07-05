// 값 수정
let foo = 'foo';
foo = 'foo2'; // 수정 가능

const bar = 'bar';
bar = 'bar2'; // 수정 불가
// TypeError: Assignment to constant variable.

// ---

// 선언, 초기화
const baz; // const로 선언한 변수는 선언과 동시에 초기화 해야한다.
// SyntaxError: Missing initializer in const declaration

let baz2; // let으로 선언한 변수는 선언과 동시에 초기화할 필요없다.
baz = 'baz';

// ---

// const 변수의 프로퍼티 값 수정
const foo2 = {
  bar2: 'bar'
};
foo2.bar2 = 'bar2'; // const로 선언된 객체의 프로퍼티는 수정 가능