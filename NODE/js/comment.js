function Ekle(){
    const i=document.getElementById("in1").value;
    const e=document.createElement("p");
    const n=document.createTextNode(i);
    e.appendChild(n);

    document.getElementsById("myDiv").appendChild(e);
}