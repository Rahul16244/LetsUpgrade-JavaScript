window.onload = function () {
  let bus = [
    {
      name: "rahul",
      source: "rahul",
      designation: "rahul",
      capacity: 5,
    },
  ];
  if (localStorage.getItem("bus") == null) {
    localStorage.setItem("bus", JSON.stringify(bus));
  }
};
function display(buss = undefined) {
  let bus;
  if (buss == undefined) {
    bus = JSON.parse(localStorage.getItem("bus"));
  } else if (localStorage == undefined) {
    localStorage.setItem("bus", JSON.stringify(bus));
    bus = JSON.parse(localStorage.getItem("bus"));
  } else {
    bus = buss;
  }
  let tablebus = "";
  if (buss != undefined) {
    bus.forEach(function (busc, index) {
      let busrow = `<tr>
        <td>${index + 1}</td>
        <td>${busc.name}</td>
        <td>${busc.source}</td>
        <td>${busc.designation}</td>
        <td>${busc.passangerCapacity}</td>
        </tr>`;
      tablebus += busrow;
    });
    // document.write(bus[0]);
    document.getElementById("busform").innerHTML = tablebus;
  }
}

display();

function searchBySource() {
  let searchSource = document.getElementById("searchSource").value;
  let employe = JSON.parse(localStorage.getItem("employe"));
  let newdata = employe.filter(function (a) {
    return a.name.toUpperCase().indexOf(searchSource.toUpperCase()) != -1;
  });
  display(newdata);
}
function searchByDesignation() {
  let searchDesignation = document.getElementById("searchDesignation").value;
  let employe = JSON.parse(localStorage.getItem("employe"));
  let newcdata = employe.filter(function (b) {
    return b.city.toUpperCase().indexOf(searchDesignation.toUpperCase()) != -1;
  });
  display(newcdata);
}
function addBus(e) {
  if (localStorage.getItem("bus") == null) {
    console.log(bus);
  }

  e.preventDefault();
  let bustype = {};
  let name = document.getElementById("name").value;
  let source = document.getElementById("source").value;
  let designation = document.getElementById("designation").value;
  let number = document.getElementById("number").value;
  let capacity = document.getElementById("capacity").value;
  bustype.name = name;
  bustype.source = source;
  bustype.designation = designation;
  bustype.number = number;
  bustype.capacity = Number(capacity);

  let bus = JSON.parse(localStorage.getItem("bus"));
  console.log(bus);
  // bus.push(bustype);
  localStorage.setItem("bus", JSON.stringify(bustype));
  display();
  document.getElementById("name").value = "";
  document.getElementById("source").value = "";
  document.getElementById("designation").value = "";
  document.getElementById("number").value = "";
  document.getElementById("capacity").value = "";
}
