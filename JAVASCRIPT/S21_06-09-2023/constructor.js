class User {
  username;
  gender;
  email;
  city;

  constructor(name, gender, email) {
    this.username = name;
    this.gender = gender;
    this.email = email;
    this.city = "Pune";
  }

  display() {
    console.log(this.username, this.gender, this.email, this.city);
  }
}

var user1 = new User("Raj", "male", "Raj@gmail.com");
var user2 = new User("Sneha", "female", "Sneha@gmail.com");
var user3 = new User("Rahul", "male", "Rahul@gmail.com");

user1.display();
user2.display();
user3.display();
