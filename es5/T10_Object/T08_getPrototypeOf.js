function Book(point) {
  this.point = point;
};
Book.prototype.getPoint = function(){};
Book.prototype.setPoint = function(){};
var obj = new Book(100);

var result = Object.getPrototypeOf(obj);
for (var key in result){
  console.log(key + ":" + result[key]);
}
// getPoint:function(){}
// setPoint:function(){}