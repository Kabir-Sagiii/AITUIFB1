var x = 100;
var y = 200;

var result1 = x + ++y; //201 // 100 + 201 = 301

var a = 100;
var b = 200;
var result2 = a + b++; //300 // 100 + 200+ //300 //201

console.log(result1, result2);
console.log(b); //200 or 201
