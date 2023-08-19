var arr = ["Raj", "Rahul", "Ayush", 100, true, 99];
console.log(arr);
//Remove specific element
// arr.splice(2, 1);
// arr.splice(1, 3);

//add new element
arr.splice(4, 0, { city: "delhi" });

console.log(arr);
