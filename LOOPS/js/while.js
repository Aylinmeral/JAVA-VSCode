function whilefunc(){
let text=0;
let i=0;

while(i<5){
text+="<br> Merhaba " + i
i++
}
let x=document.getElementsByClassName("demo");
x[1].innerHTML=text;
}