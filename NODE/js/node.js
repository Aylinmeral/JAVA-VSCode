const nodeList=document.body.childNodes;
let text="";
for(let i=0;i<nodeList.length;i++){
    text+=nodeList[i].nodeName+"<br>";
}
document.getElementById("demo1").innerHTML=text;