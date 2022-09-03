function Hesapla(){
let i1=parseInt(document.getElementById("in1").value);
let i2=parseInt(document.getElementById("in2").value);
let s=document.getElementById("selectid").value;
let sonuc=0

switch(s){
    case "+":
sonuc=i1+i2;
document.getElementById("demo2").innerHTML="Toplam sonucu: "+" "+sonuc;
    break;
    case "-":
sonuc=i1-i2;
document.getElementById("demo2").innerHTML="Cikarma sonucu: "+" "+sonuc;
    break;
    case "*":
sonuc=i1*i2;
document.getElementById("demo2").innerHTML="Carpma sonucu: "+" "+sonuc;
    break;
    case "/":
sonuc=i1/i2;
document.getElementById("demo2").innerHTML="Bolme sonucu: "+" "+sonuc;
    break;

    default:
       document.getElementById("demo2").innerHTML="Inputlar bos olamaz";
        break;
}
}