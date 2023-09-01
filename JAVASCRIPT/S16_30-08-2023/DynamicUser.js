var data = [
  {
    name: "Raj V",
    city: "Hyd",
    email: "Raj@gmail.com",
  },

  {
    name: "Raj V",
    city: "Hyd",
    email: "Raj@gmail.com",
  },
  {
    name: "Raj V",
    city: "Hyd",
    email: "Raj@gmail.com",
  },
  {
    name: "Raj V",
    city: "Hyd",
    email: "Raj@gmail.com",
  },
  {
    name: "Raj V",
    city: "Hyd",
    email: "Raj@gmail.com",
  },
  {
    name: "Raj V",
    city: "Hyd",
    email: "Raj@gmail.com",
  },
];
function createTable() {
  var table = document.createElement("table"); //<table> </table>
  var tr1 = document.createElement("tr"); //<tr> </tr>

  var th1 = document.createElement("th");
  var th2 = document.createElement("th");
  var th3 = document.createElement("th");

  th1.innerText = "NAME";
  th2.innerText = "CITY";
  th3.innerText = "EMAIL";

  tr1.appendChild(th1); //<table><tr><th> </th></tr></table>
  tr1.appendChild(th2); //<table><tr><th> </th> <th> </th></tr></table>
  tr1.appendChild(th3); // //<table><tr><th> </th> <th> </th><th> </th></tr></table>

  table.appendChild(tr1);
  table.width = "800px";
  table.frame = "box";
  table.rules = "all";
  table.style.margin = "auto";
  table.cellPadding = "10px";

  tr1.style.backgroundColor = "black";
  tr1.style.color = "white";

  for (let user of data) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");

    td1.innerText = user.name;
    td2.innerText = user.city;
    td3.innerText = user.email;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    tr.align = "center";

    table.appendChild(tr);
  }

  var bodyRef = document.getElementsByTagName("body");

  bodyRef[0].appendChild(table);
  console.log(bodyRef);
}
