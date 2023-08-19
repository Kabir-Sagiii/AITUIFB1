var arr = [101, 300, 20, 155, 600]; // [300,600]

var filteredArray = arr.filter(function (element, index) {
  return element < 200; // 300 > 200
});

console.log(filteredArray);
