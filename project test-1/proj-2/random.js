let x;
let y;
let z;

document.getElementById("generateButton").onclick = ()=>{
     x = Math.floor(Math.random() *10 +1);
     y = Math.floor(Math.random() *100 +1);
     z = Math.floor(Math.random() *1000 +1); 

     document.getElementById("xlabel").innerHTML=x;
     document.getElementById("ylabel").innerHTML=y;
     document.getElementById("zlabel").innerHTML=z;
}