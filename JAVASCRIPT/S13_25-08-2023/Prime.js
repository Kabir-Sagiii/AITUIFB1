function checkPrime(num) {
  var isPrime = true;

  if (num < 1) {
    console.log("Enter Positive number greater then 1");
  } else if (num == 1) {
    console.log("1 is not Prime number");
  } else if (num > 1) {
    for (var i = 2; i < num; i++) {
      if (num % i == 0) {
        isPrime = false;
      }
    }
  }
  if (isPrime) {
    console.log("Given number is Prime number");
  } else {
    console.log("Given number is not Prime number");
  }
}

checkPrime(66);
