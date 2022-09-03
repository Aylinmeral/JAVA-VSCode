function Test(){
    let x=document.getElementById("demo2").value;
    let y=document.getElementById("pid");
    y.innerHTML="";
    y.style.color="red";

    try{
       if(x=="") throw "input bos olamaz";
       if(isNaN(x)) throw "Sayi girmeniz gerekiyor";
       if(x<5) throw "Sayi 5 ten kucuk olamaz";
       if(x>10) throw "Sayi 10 dan buyuk olamaz";
       if(x>=5 && x<=10){
        document.getElementById("pid").innerHTML="TEBRIKLER";
        document.getElementById("pid").style.color="green";
       }

    }catch(e){
        document.getElementById("pid").innerHTML=e;
    }finally{
        document.getElementById("demo2").value=""; 
    }
    
}