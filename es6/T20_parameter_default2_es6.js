const drawEs5Chart = ({
  size = 'big',
  cords = {x: 0, y: 0},
  radius = 25
} = {}) => {
  console.log(size, cords, radius);
}

drawEs5Chart({
  cords: {x: 18, y: 30},
  radius: 30
});
// big {x: 18, y: 30} 30
