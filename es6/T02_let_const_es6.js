function sayHello(name) {
  if(!name) {
    let errorMessage = '"name" parameter should be non empty String';

    console.log(errorMessage);
  }
  console.log(errorMessage); // ReferenceError
}
sayHello('icj');