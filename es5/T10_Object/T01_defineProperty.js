var obj = {
  oldProp : 'oldVlue'
};

// Change Old Property
Object.defineProperty(obj, 'oldProp', {
  value: 'changeValue'
});
console.log(obj); // { oldProp: 'changeValue' }

// New Property
Object.defineProperty(obj, 'newProp', {
  value: 'newValue',
  enumerable: true
});
console.log(obj); // { oldProp: 'changeValue', newProp: 'newValue' }