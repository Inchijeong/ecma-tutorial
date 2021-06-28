var obj = {};
Object.defineProperty(obj, 'book', {
  value: 'HarryPotter',
  writable: true
});

Object.freeze(obj);

try{
  Object.defineProperty(obj, 'book', {
    value: 'Ant'
  });
}catch(e){
  console.log(e);
  // TypeError: Cannot redefine property: book
}