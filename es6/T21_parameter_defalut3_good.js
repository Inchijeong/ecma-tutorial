function drawEs5Chart({
  size = 'big',
  cords = {
    src: {x: 0, y: 0},
    dest: {x: 0, y: 0}
  }
}) {
  if(cords.src === undefined) {
    cords.src = {x: 0, y: 0};
  }
  if(cords.dest === undefined) {
    cords.dest = {x: 0, y: 0};
  }
  console.log(size, cords.src.x, cords.src.y, cords.dest.x, cords.dest.y);
};

drawEs5Chart({
  cords: {src: {x: 18, y: 30}}
});
// big 18 30 0 0

