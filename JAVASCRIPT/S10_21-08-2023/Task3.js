var x = 100;
var y = 50;

var result1 = --x + --y; // 99 + 49 = 148
console.log(result1); //x = 99 , y = 49

var result2 = x-- + y--; // 99 + 49 = 148
console.log(result2);

console.log(x, y); //x =98 y=48
