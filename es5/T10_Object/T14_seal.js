var obj = {};
Object.defineProperty(obj, 'book', {
  value: 'HarryPotter',
  writable: true
});

Object.seal(obj);

try{
  Object.defineProperty(obj, 'sports', {
    value: 'soccer'
  });
}catch(e){
  console.log(e);
  // TypeError: Cannot define property sports, object is not extensible
}