function Bul(){
    let gun=parseInt(document.getElementById('Input1').value);

    switch(gun){
case 1:
document.getElementById('demo').innerHTML="Pazartesi";
break;
case 2:
document.getElementById('demo').innerHTML="Sali";
break;
case 3:
document.getElementById('demo').innerHTML="Carsamba";
break;
case 4:
document.getElementById('demo').innerHTML="Persembe";
break;
case 5:
document.getElementById('demo').innerHTML="Cuma";
break;
case 6:
document.getElementById('demo').innerHTML="Cumartesi";
break;
case 7:
document.getElementById('demo').innerHTML="Pazar";
break;
default:
document.getElementById('demo').innerHTML="Lutfen 1-7 arasi bir sayi girin";
break;
    }
}