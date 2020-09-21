let array = [];
window.onload = function () {
  if (localStorage.getItem("array") == null) {
    // console.log(array);
    localStorage.setItem("array", JSON.stringify(array));
  }
};

function display(arr = undefined) {
  let array;
  if (arr == undefined) {
    array = JSON.parse(localStorage.getItem("array"));
    // console.log(localStorage.getItem("array"));
  } else if (localStorage == undefined) {
    localStorage.setItem("array", JSON.stringify(array));
    array = JSON.parse(localStorage.getItem("array"));
  } else {
    array = arr;
  }
  // console.log(array);
  let data = "";
  if (array != undefined) {
    array.forEach(function (element, index) {
      let temp = `<tr>
            <td>${index + 1}</td>
            <td>${element.name}</td>
            <td>${element.source}</td>
            <td>${element.destiny}</td>
            <td>${element.busno}</td>
            <td>${element.capacity}</td>
            </tr>`;

      data += temp;
    });
    document.getElementsByClassName("body")[0].innerHTML = data;
  }
}

display();

function add(e) {
  if (localStorage.getItem("array") == null) {
    // console.log(array);
    localStorage.setItem("array", JSON.stringify(array));
  }

  e.preventDefault();

  let tempobject = {};
  tempobject.name = document.getElementsByTagName("input")[2].value;
  tempobject.source = document.getElementsByTagName("input")[3].value;
  tempobject.destiny = document.getElementsByTagName("input")[4].value;
  tempobject.busno = document.getElementsByTagName("input")[5].value;
  tempobject.capacity = document.getElementsByTagName("input")[6].value;
  // console.log(tempobject);
  array = JSON.parse(localStorage.getItem("array"));

  array.push(tempobject);
  localStorage.setItem("array", JSON.stringify(array));

  display();
  location.reload();

  document.getElementsByTagName("input")[2].value = "";
  document.getElementsByTagName("input")[3].value = "";
  document.getElementsByTagName("input")[4].value = "";
  document.getElementsByTagName("input")[5].value = "";
  document.getElementsByTagName("input")[6].value = "";
}

function searchSource() {
  let source = document.getElementsByTagName("input")[0].value;

  array = JSON.parse(localStorage.getItem("array"));
  console.log(array, source);

  let find = array.filter(function (element) {
    return element.source.toUpperCase().indexOf(source.toUpperCase()) != -1;
  });
  // console.log(find);
  display(find);
}

function searchDestiny() {
  let destiny = document.getElementsByTagName("input")[1].value;

  array = JSON.parse(localStorage.getItem("array"));
  console.log(array, destiny);

  let find = array.filter(function (element) {
    return element.destiny.toUpperCase().indexOf(destiny.toUpperCase()) != -1;
  });
  // console.log(find);
  display(find);
}
