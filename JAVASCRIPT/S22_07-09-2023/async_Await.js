function createPromise() {
  //   var promise= new Promise()

  //   return promise

  return new Promise(function (resolve, reject) {
    resolve({
      status: true,
      data: [{ name: "Rohan" }, { name: "Sahil" }, { name: "Zoya" }],
    });
  });
}

async function catchPromise() {
  try {
    var responseData = await createPromise();
    console.log(responseData);
  } catch (errorodata) {
    console.log(errordata);
  }
}

catchPromise();
