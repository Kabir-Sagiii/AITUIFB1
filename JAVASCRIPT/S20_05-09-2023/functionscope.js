function f1() {
  var gender = "male";

  function fn() {
    console.log(gender);
    console.log("fn is called");
  }
  console.log(gender);
}

f1();

fn();
