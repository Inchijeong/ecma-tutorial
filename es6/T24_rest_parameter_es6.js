function textToFriends(message, ...friends) {
  console.log(message, friends);
  // { message: 'hi', friends: [ 'Jack', 'Jill', 'Tom' ] } []
}

textToFriends({
  message: 'hi',
  friends: ['Jack', 'Jill', 'Tom']
});