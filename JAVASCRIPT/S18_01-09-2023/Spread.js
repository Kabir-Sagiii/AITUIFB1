var obj1 = {
  username: "Rajesh Verma",
  city: "Delhi",
  id: 101,
  gender: "male",
};

var obj2 = {
  ...obj1,
  email: "Rajesh@gmail.com",
  city: "Pune",
};

// console.log(obj2);

var arr1 = [100, "Riya", "female", 90000, "Mumbai"];

var arr2 = [...arr1, "Riya@gmail.com"];

console.log(arr2);
