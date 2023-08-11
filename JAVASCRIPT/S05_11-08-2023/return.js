function myfn(x, y) {
  var result = x + y;

  return function () {
    console.log(x + y);
  };
}

var output = myfn(1, 5);
console.log(output);
output();
