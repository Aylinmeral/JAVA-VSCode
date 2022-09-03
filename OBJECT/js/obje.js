const person={
    FirstName:"Aylin",
    LastName:"meral",
    Age:45,
    Id:123456
}
const x=person;
x.Age=48;

function getir(){
   // document.getElementById("demo").innerHTML=person.FirstName+" "+person.Age;
document.getElementById("demo").innerHTML=person["Age"]+" "+person["Id"];
}
