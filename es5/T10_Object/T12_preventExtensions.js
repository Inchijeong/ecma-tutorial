var obj = {};
Object.preventExtensions(obj);
try{
  Object.defineProperty(obj, 'book', {
    value: 'HarryPotter'
  });
}catch(e){
  console.log(e);
  // TypeError: Cannot define property book, object is not extensible
}