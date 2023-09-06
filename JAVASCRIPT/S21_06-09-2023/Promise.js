var promiseObject = new Promise(function (resolve, reject) {
  //   resolve("Kabir");

  reject("Error due to server crash");
});

promiseObject
  .then(function (successdata) {
    console.log("Then", successdata);
  })
  .catch(function (errordata) {
    console.log("Catch", errordata);
  });
