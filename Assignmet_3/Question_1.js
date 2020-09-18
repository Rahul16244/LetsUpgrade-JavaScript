let employe = [
  {
    name: "Raonak",
    age: 25,
    city: "Noida",
    salary: 15000,
  },
  {
    name: "Hadd",
    age: 28,
    city: "Delhi",
    salary: 20000,
  },
  {
    name: "Hritik",
    age: 32,
    city: "Mumbai",
    salary: 25000,
  },
  {
    name: "Sam",
    age: 24,
    city: "Banglore",
    salary: 12000,
  },
];

function display(emps) {
  let tableemploye = "";
 
  emps.forEach(function (emp, index) {
    let employerow = `<tr>
        <td>${index+1}</td>
        <td>${emp.name}</td>
        <td>${emp.age}</td>
        <td>${emp.city}</td>
        <td>${emp.salary}</td>
        <td><button onclick='deleteEmpl(${index})'>Delete</button></td>
        </tr>`;
    tableemploye += employerow;
    
  });

  document.getElementById("employes").innerHTML = tableemploye;
// document.getElementsByClassName("employes")[0].innerHTML= tableemploye;


}

display(employe);

function deleteEmpl(index){
  employe.splice(index, 1);
  display(employe);
}

function searchByName() {
  
    let searchName = document.getElementById("searchName").value;

  let newdata = employe.filter(function (a) {
    return (
      a.name.toUpperCase().indexOf(searchName.toUpperCase()) != -1
    );
   
  });
  display(newdata);}
  function searchByCity(){
    let searchCity = document.getElementById("searchCity").value;
    let newcdata = employe.filter(function(b){
      return(
        b.city.toUpperCase().indexOf(searchCity.toUpperCase())!= -1
         );
    });
    display(newcdata); 
  
  }