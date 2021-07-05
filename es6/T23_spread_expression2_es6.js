var friends = ['Jack', 'Jill', 'Tom'];
var anotherFriends = [...friends, 'Kim'];

console.log(anotherFriends);
// [ 'Jack', 'Jill', 'Tom', 'Kim' ]

var drinks = {
  coffee: 'coffee',
  juice: 'orange juice'
};
var newDrinks = {
  ...drinks,
  juice: 'tomato juice',
  water: 'water'
};

console.log(newDrinks);
// { coffee: 'coffee', juice: 'tomato juice', water: 'water' }