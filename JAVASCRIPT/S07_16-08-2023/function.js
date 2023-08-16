var obj = {
  id: 101,
  brand: "Apple",
  fnAdd: function () {
    var x = 10;
    var y = 200;
    console.log(x + y);
  },
};
console.log(obj);
obj.fn();
