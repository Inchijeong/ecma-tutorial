function drawEs5Chart(options) {
  options = options || {};
  var size = options.size || 'big';
  var cords = options.cords || {x: 0, y: 0};
  var radius = options.radius || 25;
  console.log(size, cords, radius);
}

drawEs5Chart({
  cords: {x: 18, y: 30},
  radius: 30
});
// big {x: 18, y: 30} 30
