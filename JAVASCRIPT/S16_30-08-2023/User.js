function createTable() {
  var table = document.createElement("table"); //<table> </table>
  var tr1 = document.createElement("tr"); //<tr> </tr>
  var tr2 = document.createElement("tr"); //<tr> </tr>
  var tr3 = document.createElement("tr"); //<tr> </tr>
  var tr4 = document.createElement("tr"); //<tr> </tr>

  var th1 = document.createElement("th");
  var th2 = document.createElement("th");
  var th3 = document.createElement("th");

  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");

  var td4 = document.createElement("td");
  var td5 = document.createElement("td");
  var td6 = document.createElement("td");

  var td7 = document.createElement("td");
  var td8 = document.createElement("td");
  var td9 = document.createElement("td");

  th1.innerText = "ID";
  th2.innerText = "NAME";
  th3.innerText = "EMAIL";

  td1.innerText = 101;
  td2.innerText = "Raj Verma";
  td3.innerText = "Raj@gmail.com";

  td4.innerText = 102;
  td5.innerText = "Ayushi Sharma";
  td6.innerText = "Ayushi@gmail.com";

  td7.innerText = 103;
  td8.innerText = "Salmaan Khan";
  td9.innerText = "Salmaan@gmail.com";

  tr1.appendChild(th1); //<table><tr><th> </th></tr></table>
  tr1.appendChild(th2); //<table><tr><th> </th> <th> </th></tr></table>
  tr1.appendChild(th3); // //<table><tr><th> </th> <th> </th><th> </th></tr></table>

  tr2.appendChild(td1);
  tr2.appendChild(td2);
  tr2.appendChild(td3);

  tr3.appendChild(td4);
  tr3.appendChild(td5);
  tr3.appendChild(td6);

  tr4.appendChild(td7);
  tr4.appendChild(td8);
  tr4.appendChild(td9);

  table.appendChild(tr1); //<table><tr></tr></table>

  table.appendChild(tr2); //<table><tr></tr> <tr></tr></table>

  table.appendChild(tr3); //<table><tr></tr> <tr></tr> <tr></tr></table>

  table.appendChild(tr4); //<table><tr></tr> <tr></tr> <tr></tr> <tr></tr></table>

  table.width = "800px";
  table.frame = "box";
  table.rules = "all";
  table.style.margin = "auto";
  table.cellPadding = "10px";

  tr1.style.backgroundColor = "black";
  tr1.style.color = "white";

  tr2.align = "center";

  tr3.align = "center";

  tr4.align = "center";

  var bodyRef = document.getElementsByTagName("body");

  bodyRef[0].appendChild(table);
  console.log(bodyRef);
}
