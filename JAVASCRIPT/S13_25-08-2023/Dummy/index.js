var http = require("http");
var axios = require("axios");
var fs = require("fs");

var server = http.createServer((req, res) => {
  if (req.url === "/home") {
    fs.readFile("home.html", "utf-8", (err, data) => {
      res.end(data);
    });
  } else {
    axios.get("https://fakestoreapi.com/products").then((data) => {
      console.log(req.url);
      // var result = JSON.stringify(response);
      // console.log(data);
      res.end(JSON.stringify(data.data));
    });
  }
  //   res.end(JSON.stringify({ name: "Sagar" }));
});

server.listen(9090);
