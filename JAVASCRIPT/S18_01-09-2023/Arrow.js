function fn() {
  return "I am Returning a From Normal function";
}

var myArrowfn = () => "I am returnung from Arrow function";

console.log(myArrowfn());

var obj1 = {
  username: "Raj",
  city: "Banglore",
  print: function () {
    console.log(this.username, this.city); //obj1.username
  },
};

obj1.print();

var obj2 = {
  username: "Raj",
  city: "Banglore",
  print: () => {
    console.log(this.username, this.city); //obj1.username
  },
};
obj2.print();
