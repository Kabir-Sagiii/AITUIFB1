export var username = "Ritika Verma";

export function displayDetails() {
  console.log(username);
  console.log("101", "female", "Ritika@gmail.com");
}

function fn() {
  console.log("This fn function which exported by default");
}

export default fn;
