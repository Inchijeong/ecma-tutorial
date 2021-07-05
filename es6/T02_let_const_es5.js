function sayHello(name) {
  if(!name) {
    var errorMessage = '"name" parameter should be non empty String';

    console.log(errorMessage);
  }
  console.log(errorMessage); // undefined
}
sayHello('icj');