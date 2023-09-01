var obj = {
  username: "Rajesh Verma",
  city: "Delhi",
  id: 101,
  gender: "male",
};

var { id, gender, city } = obj;

//100 places

// console.log(city, gender, id);

var productDetails = [
  "Iphone 14 Pro",
  "Vivo A27",
  "Samsung S23",
  "Samsung A34",
  "Iphone 13",
];

var [element1, element2, element3] = productDetails;

// console.log(productDetails[3]);
console.log(element1, element2, element3);
