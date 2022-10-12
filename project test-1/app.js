const generateBtn=document.getElementById("generateBtn");

generateBtn.addEventListener('click',buttonAction);
function buttonAction(){
    const fromNum =document.getElementById("fromNum").value;
    const toNum =document.getElementById("toNum").value;
    
    randomNum=Math.floor(Math.random()* parseInt(toNum));
    
    if(randomNum>=parseInt(fromNum)){
        const randomNumEl=document.getElementById("randomNumEl")
        randomNumEl.innerHTML=randomNum;      
    }
}