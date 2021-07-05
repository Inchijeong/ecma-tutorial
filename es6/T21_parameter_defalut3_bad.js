function drawEs5Chart({
  size = 'big',
  cords = {
    src: {x: 0, y: 0},
    dest: {x: 0, y: 0}
  }
}) {
  console.log(size, cords.src.x, cords.src.y, cords.dest.x, cords.dest.y);
};

drawEs5Chart({
  cords: {src: {x: 18, y: 30}}
});
// Uncaught TypeError: Cannot read property 'x' of undefined
