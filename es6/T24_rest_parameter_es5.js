function textToFriends() {
  var message = arguments[0];
  // arguments 2번째 요소부터 친구들 배열로 만들기
  var friends = [].slice.call(arguments, 1);

  console.log(message, friends);
  // { message: 'hi', friends: [ 'Jack', 'Jill', 'Tom' ] } []
}

textToFriends({
  message: 'hi',
  friends: ['Jack', 'Jill', 'Tom']
});