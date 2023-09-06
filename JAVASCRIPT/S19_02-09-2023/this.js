var obj1 = {
  c: 100,
};

var obj2 = {
  c: 500,
};

function fnAdd(x, y) {
  console.log(x + y + this.c);
}

fnAdd.call(obj1, 100, 200); //400

fnAdd.call(obj2, 100, 200); //800

fnAdd.apply(obj1, [50, 50]); //200
