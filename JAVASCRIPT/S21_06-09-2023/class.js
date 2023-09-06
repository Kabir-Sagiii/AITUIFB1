class Products {
  brandName = "Apple";
  modelName = "Macbook Pro";
  price = 230000;
  rating = 4.5;

  display() {
    console.log(this.brandName, this.modelName, this.price, this.rating);
  }

  changePrice(newPrice) {
    this.price = newPrice;
    this.display();
  }
}

var product1 = new Products();
var product2 = new Products();
var product3 = new Products();
var product4 = new Products();

product1.display();

product2.display();
console.log("------------------------------------------------");

product2.brandName = "Samsung";
product2.modelName = "Galaxy s23 Ultra";
product2.price = 125000;
product2.rating = 4.3;

product2.display();

product1.changePrice(500000);

// console.log(product1);
// console.log(product2);
