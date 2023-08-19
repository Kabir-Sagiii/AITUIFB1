var arr = [100, 200, 300];

console.log(arr);

//add new element at last position
arr.push(400);
arr.push("Neha", true);
console.log(arr);

//add element in the initial position
arr.unshift(99);
arr.unshift({ city: "delhi" }, 98);
console.log(arr);
