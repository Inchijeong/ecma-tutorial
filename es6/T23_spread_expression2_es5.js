var friends = ['Jack', 'Jill', 'Tom'];
var anotherFriends = [friends[0], friends[1], friends[2], 'Kim'];

console.log(anotherFriends);
// [ 'Jack', 'Jill', 'Tom', 'Kim' ]

var drinks = {
  coffee: 'coffee',
  juice: 'orange juice'
};
var newDrinks = {
  coffee: drinks.coffee,
  juice: 'tomato juice',
  water: 'water'
};

console.log(newDrinks);
// { coffee: 'coffee', juice: 'tomato juice', water: 'water' }