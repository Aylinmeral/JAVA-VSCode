function hesapla(){
    let i1=parseInt(document.getElementById('Input1').value);
    let i2=parseInt(document.getElementById('Input2').value);
    let sonuc=(i1-(i2/4));
    if(sonuc>15){
       document.getElementById('demo').innerHTML="Tebrikler "+"NET: "+sonuc;

    }else{
       document.getElementById('demo').innerHTML="Biraz daha gayret "+"NET: "+sonuc;
    }
}