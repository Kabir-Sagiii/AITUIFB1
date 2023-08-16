var user = {
  data: {},
  name: "Riya Verma",
  id: 101,
  isPlaced: true,
  address: {
    city: "Pune", //Mumbai
    state: "MH",
    pincode: 839430220,
    area: {
      area1: "FC Road", //  user.address.area.area1
      area2: "Hin",
      area3: {
        sector1: "sector-1-Rajugunj",
        sector2: "sector-2-Rajugunj",
      },
    },
  },
};

console.log(user.address.city);
//Accessing
console.log(user.address.area.area1);

//Modifying
user.address.city = "Mumbai";
//Deleting
delete user.address.city;
//Inserting
user.address.areaName = "cdlsjncdjksncbds";
