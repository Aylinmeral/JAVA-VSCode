let meyve=["elma ", " muz ", " kiraz"];
document.getElementById("demo").innerHTML=meyve;
function ekle(){
    meyve.push(" cilek");
    document.getElementById("demo").innerHTML=meyve; 
}
function kaldir(){
    meyve.pop();
    document.getElementById("demo").innerHTML=meyve; 
}