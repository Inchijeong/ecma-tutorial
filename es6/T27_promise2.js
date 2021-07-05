const checkNumIsExceedTen = new Promise((resolve, reject) => {
  setTimeout(() => {
    // const num = getRandomNumberFromServer();
    // const num = 11;
    const num = 8;

    if(Number.isNaN(num)) {
      throw new Error('Value that from server must be a "number" type.');
    }

    if(num > 10) {
      resolve(num);
    }else {
      reject(num);
    }
  });
});

checkNumIsExceedTen
  .then((num) => {
    console.log(`'num' is ${num}. It is exceed 10.`);
  }, (num) => {
    console.log(`'num' is ${num}. It is not exceed 10.`);
  })
  .catch((error) => {
    console.log(error.message);
  });