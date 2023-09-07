function fnGetData() {
  //    var promiseObj =   fetch("https://jsonplaceholder.typicode.com/users")
  //    promiseObj.then().catch()

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((success) => {
      return success.json();
    })
    .then((data) => {
      var ol = document.createElement("ol");
      data.forEach((element) => {
        var li = document.createElement("li");
        li.innerText = element.name;
        ol.appendChild(li);
      });
      document.getElementById("body").appendChild(ol);
    })
    .catch((error) => {
      var h2 = document.createElement("h2");
      h2.innerText = "Something Went Wrong While Fetching the Data";
      h2.style.fontSize = "42px";
      h2.style.color = "red";
      document.getElementById("body").appendChild(h2);
    });
}
