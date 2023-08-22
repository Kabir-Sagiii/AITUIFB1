var details = [
  {
    brand: "Apple",
    price: 90000,
    model: "Iphone 13",
  },
  {
    brand: "Apple",
    price: 70000,
    model: "Iphone 12",
  },
  {
    brand: "Vivo",
    price: 40000,
    model: "Vivo A27",
  },
  {
    brand: "Vivo",
    price: 23000,
    model: "Vivo A21",
  },
  {
    brand: "Samsung",
    price: 80000,
    model: "Samsung A75",
  },
  {
    brand: "Samsung",
    price: 100000,
    model: "Samasung galaxy",
  },
];

var FilteredData = details.filter(function (element) {
  return (
    (element.brand == "Apple" || element.brand == "Samsung") &&
    element.price > 80000
  );
});

console.log(FilteredData);
