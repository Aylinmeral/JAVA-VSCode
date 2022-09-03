const person={
    Fname:"Pelin",
    Lname:"MERAL",
    Age:13,
    fullname:function(){
        return this.Fname+" "+this.Lname;
    }
}
function funcall(){
    document.getElementById("demo2").innerHTML=person.fullname();
}