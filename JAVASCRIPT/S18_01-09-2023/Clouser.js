function Outer() {
  var city = "Delhi";
  console.log("Outer Function", city);

  function Inner(x, y) {
    console.log(x + y);
    console.log("Inner Function", city);
  }

  //   Inner(10, 20);

  return Inner;
}

var fninner = Outer();

fninner(5, 5);
