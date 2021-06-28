var obj = {};

Object.defineProperties(obj, {
  soccer: {
    value: '축구'
  },
  baseball: {
    value: '야구',
    enumerable: true
  }
});

console.log(obj); // { baseball: '야구' }
console.log(obj.soccer); // 축구