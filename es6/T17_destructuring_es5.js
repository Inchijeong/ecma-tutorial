function printUserInformation(data) {
  var name = data.name;
  var age = data.age;
  var hobbies = data.hobbies;
  var firstHobby = hobbies[0];

  console.log('이름: ' + name);
  console.log('나이: ' + age);
  console.log('가장 좋아하는 취미: ' + firstHobby);
}

printUserInformation({
  name: 'icj',
  age: 30,
  hobbies: ['soccer', 'baseball']
});
// 이름: icj
// 나이: 30
// 가장 좋아하는 취미: soccer
