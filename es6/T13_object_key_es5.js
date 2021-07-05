var ironMan = 'Iron Man';
var captainAmerica = 'Captain America';

var MarvelHeros = {};
MarvelHeros[ironMan] = 'I`m the Iron Man.';
MarvelHeros['Groot'] = 'I am Groot.';
MarvelHeros[captainAmerica] = 'My name is Steve Rogers.';
MarvelHeros['3-D' + 'MAN'] = 'I`m the 3-D Man!';

console.log(MarvelHeros);
// {
//   Iron Man: 'I`m the Iron Man.',
//   Groot: 'I am Groot.',
//   Captain America: 'My name is Steve Rogers.',
//   3-DMAN: 'I`m the 3-D Man!'
// }
