var details = [
  {
    brand: "Apple",
    model: "Iphone 14",
    price: 90000,
  },
  { brand: "Apple", model: "Iphone 12", price: 70000 },
  {
    brand: "Samsung",
    model: "Galaxy",
    price: 110000,
  },

  {
    brand: "Vivo",
    model: "vivo A27",
    price: 40000,
  },
  {
    brand: "Vivo",
    model: "vivo Pro",
    price: 50000,
  },
];

var newdata = details.filter(function (element, index) {
  //element = {brand:"",model:"",price:""}

  return element.price > 50000;
});

console.log(newdata);
