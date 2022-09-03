function MyFunction(){
    let x;
    let text=prompt("Lutfen isminizi giriniz");
    if(text==null || text==""){
        x="iptal edildi";
    }else{
        x="Merhaba "+text+" Hos Geldiniz";
    }
    document.getElementById("demo1").innerHTML=x;
}